import React from 'react'
import cls from './AdditionalTool.module.scss'
function AdditionalTool({ BooleanShow }) {
	const style = [cls.Tools];
	if (BooleanShow) {
		style.push(cls.show)
	}
	return (
		<div className={style.join(' ')} onClick={(e) => e.stopPropagation()}>
			<div className={cls.ToolsItem}>
				<span className={cls.ToolsText}>Возпроизвести следующим</span>
			</div>
			<div className={cls.ToolsItem + " " + cls.Hidetools}>
				<span className={cls.ToolsText}>Добавить </span>
			</div>
		</div>
	)
}

export default AdditionalTool