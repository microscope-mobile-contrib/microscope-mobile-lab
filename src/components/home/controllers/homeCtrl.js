'use strict';

var _$sce;

// HomeCtrl class
function HomeCtrl ($sce, $scope) {
	_$sce = $sce;
	
	this.source = '';
	this.iframe = {
		url: 'http://codepen.io/tomadj/full/ZGaKor/'
	};
	
	this.getSource();
}

HomeCtrl.prototype.getSource = function () {
	this.source = _$sce.trustAsResourceUrl(this.iframe.url);
};

module.exports = HomeCtrl;