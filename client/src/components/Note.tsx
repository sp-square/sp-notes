import { Note as NoteModel } from '../models/note';
import { Card } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import styles from '../styles/Note.module.css';
import { formatDate } from '../utils/formatDate';

interface NoteProps {
	note: NoteModel;
	className?: string;
	onDeleteNote: (note: NoteModel) => void;
}

const Note = ({ note, className, onDeleteNote }: NoteProps) => {
	const { title, text, topic, createdAt, updatedAt } = note;

	return (
		<Card className={`${styles.noteCard} ${className}`}>
			<Card.Body className={styles.cardBody}>
				<Card.Title className={styles.cardTitle}>
					{title}
					<MdDelete
						className="text-danger ms-auto"
						onClick={(e) => {
							onDeleteNote(note);
							e.stopPropagation();
						}}
					/>
				</Card.Title>
				<Card.Subtitle>Topic: {topic}</Card.Subtitle>
				<Card.Text className={styles.cardText}>{text}</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">
				{updatedAt > createdAt
					? `Updated: ${formatDate(updatedAt)}`
					: `Created: ${formatDate(createdAt)}`}
			</Card.Footer>
		</Card>
	);
};

export default Note;
