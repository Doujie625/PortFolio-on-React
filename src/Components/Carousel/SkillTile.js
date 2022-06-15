import { skillData } from "../SkillData";

const SkillTile = function () {

    return (
        <div className="SkillTile">
            {skillData.map((link) => {
                return (
                    <span key={link.id}>
                        <a href={link.url} key={link.id} className={link.class}>{link.text}</a>
                    </span>
                );
            })}
        </div>
    )
}

export default SkillTile