'use strict';

var _$sce;

// HomeCtrl class
function HomeCtrl($sce, $scope) {
	_$sce = $sce;

	this.source = '';
	this.iframe = {
		url: 'http://codepen.io/tomadj/full/ZGaKor/'
	};


	this.getSource();

	this.devices = [
		{
			name: 'iphone',
			deviceClass: 'device-iphone',
			iframeClass: 'iframe-iphone',
			img: 'iphone.png',
			urlAppStore : 'https://itunes.apple.com/fr/app/uber-votre-chauffeur-prive/id368677368?mt=8&v0=WWW-EUFR-ITSTOP100-FREEAPPS&l=fr&ign-mpt=uo%3D4',
			urlPlayStore : 'https://play.google.com/store/apps/details?id=com.ubercab&hl=fr'
		},
		{
			name: 'ipad',
			deviceClass: 'device-ipad',
			iframeClass: 'iframe-ipad',
			img: 'ipad.png',
			urlAppStore : 'https://itunes.apple.com/fr/app/uber-votre-chauffeur-prive/id368677368?mt=8&v0=WWW-EUFR-ITSTOP100-FREEAPPS&l=fr&ign-mpt=uo%3D4',
			urlPlayStore : 'https://play.google.com/store/apps/details?id=com.ubercab&hl=fr'
		}];
	
	this.selectedDeviceTemp = this.devices[1];	
	this.selectedDevice = this.devices[1];

}

HomeCtrl.prototype.getSource = function () {
	this.selectedDevice = this.selectedDeviceTemp;
	this.source = _$sce.trustAsResourceUrl(this.iframe.url);
};

module.exports = HomeCtrl;