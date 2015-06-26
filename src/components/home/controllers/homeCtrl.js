'use strict';

var _$sce;

// HomeCtrl class
function HomeCtrl($sce, $scope) {
	var self = this;
	_$sce = $sce;

	this.source = '';
	this.iframe = {
		url: 'http://codepen.io/tomadj/full/ZGaKor/'
	};

	
	
	this.getSource();

	this.devices = [
		{
			name: 'Htc',
			deviceClass: 'device-htc',
			iframeClass: 'iframe-htc',
			img: 'htc.png',
			urlAppStore : 'https://itunes.apple.com/fr/app/uber-votre-chauffeur-prive/id368677368?mt=8&v0=WWW-EUFR-ITSTOP100-FREEAPPS&l=fr&ign-mpt=uo%3D4',
			urlPlayStore : 'https://play.google.com/store/apps/details?id=com.ubercab&hl=fr'
		},
		{
			name: 'Iphone 6 Plus',
			deviceClass: 'device-iphone6plus',
			iframeClass: 'iframe-iphone6plus',
			img: 'iPhone6Plus.png',
			urlAppStore : 'https://itunes.apple.com/fr/app/uber-votre-chauffeur-prive/id368677368?mt=8&v0=WWW-EUFR-ITSTOP100-FREEAPPS&l=fr&ign-mpt=uo%3D4',
			urlPlayStore : 'https://play.google.com/store/apps/details?id=com.ubercab&hl=fr'
		},
		{
			name: 'Ipad',
			deviceClass: 'device-ipad',
			iframeClass: 'iframe-ipad',
			img: 'ipad.png',
			urlAppStore : 'https://itunes.apple.com/fr/app/uber-votre-chauffeur-prive/id368677368?mt=8&v0=WWW-EUFR-ITSTOP100-FREEAPPS&l=fr&ign-mpt=uo%3D4',
			urlPlayStore : 'https://play.google.com/store/apps/details?id=com.ubercab&hl=fr'
		}];
	
	this.selectedDeviceTemp = this.devices[1];	
	this.selectedDevice = this.devices[1];
	
	this.isLoading = false;
	
	this.iframeLoaded = function(contentLocation){
		console.log(contentLocation);
		self.isLoading = false;
	};

}

HomeCtrl.prototype.getSource = function () {
	this.selectedDevice = this.selectedDeviceTemp;
	this.source = _$sce.trustAsResourceUrl(this.iframe.url);
};

module.exports = HomeCtrl;