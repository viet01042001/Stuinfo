import './ProfileCard.css';

export default function ProfileCard(props) {
    return(
        <div className="row result-show">
            <div className="col-3">
                {props.student.id}
            </div>

            <div className="col-9">
                {props.student.name}
            </div>
        </div>
    );
}