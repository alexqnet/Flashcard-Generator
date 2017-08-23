var ClozeCard = function (fullText, cloze) {
	if (this.partial == this.fullText) {
		console.log("Error: Your fullText or cloze has an error.");
		return;
	}
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = this.fullText.split(this.cloze);

};

module.exports = ClozeCard;