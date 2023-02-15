/**
 * NOTICE
 * MODIFIED VERSION OF STUDENTVUEJS
 * HTTPS://GITHUB.COM/StudentVue/StudentVue.js
 * READ LICENSE.MD ON THEIR GITHUB PAGE
 */



const soap = require('soap');

class StudentVueClient {
    constructor(username, password, client,parent) {
        this.username = username;
        this.password = password;

        this.client = client;
        this.parent=Boolean(parent);
    }

    getMessages(child) {
        return this._xmlJsonSerialize(this._makeServiceRequest('GetPXPMessages',this.parent?{ChildIntID:child}:{},null,this.parent));
    }
    getChildList() {
      return this._xmlJsonSerialize(this._makeServiceRequest('ChildList',{},null,this.parent));
    }

    getCalendar(child) {
        return this._xmlJsonSerialize(this._makeServiceRequest('StudentCalendar',this.parent?{ChildIntID:child}:{},null,this.parent));
    }

    getAttendance(child) {
        return this._xmlJsonSerialize(this._makeServiceRequest('Attendance',this.parent?{ChildIntID:child}:{},null,this.parent));
    }

    getGradebook(reportPeriod,child) {
        let params = {};
        if (typeof reportPeriod !== 'undefined') {
            params.ReportPeriod = reportPeriod;
        }
      if(this.parent) {params.ChildIntID=child}
        return this._xmlJsonSerialize(this._makeServiceRequest('Gradebook', params,null,this.parent));
    }

    getClassNotes(child) {
        return this._xmlJsonSerialize(this._makeServiceRequest('StudentHWNotes',this.parent?{ChildIntID:child}:{},null,this.parent));
    }
    getFlex() {
        return this._xmlJsonSerialize(this._makeServiceRequest('GetFlexScheduleData'));
    }
    updateFlex(parms) {
        return this._xmlJsonSerialize(this._makeServiceRequest('UpdateFlexSchedule',parms));
    }

    getStudentInfo(child) {
        return this._xmlJsonSerialize(this._makeServiceRequest('StudentInfo',this.parent?{ChildIntID:child}:{},null,this.parent));
    }

    getFeeInformation(child) {
        return this._xmlJsonSerialize(this._makeServiceRequest('StudentFee',this.parent?{ChildIntID:child}:{},null,this.parent));
    }

    getSchedule(termIndex,child) {
        let params = {ChildIntID:"0"};
        if (typeof termIndex !== 'undefined') {
            params.TermIndex = termIndex;
        }
      if(this.parent) {params.ChildIntID=child}
        return this._xmlJsonSerialize(this._makeServiceRequest('StudentClassList',params,null,this.parent));
    }


    getSchoolInfo(child) {
        return this._xmlJsonSerialize(this._makeServiceRequest('StudentSchoolInfo',this.parent?{ChildIntID:child}:{},null,this.parent));
    }

    removeParentPhoto(parentGU) {
        return this._xmlJsonSerialize(
          this._makeServiceRequest(
            'AttachParentPhoto',
            `&lt;Parms&gt;&lt;UserGU&gt;FE5E598C-0641-4421-B2EC-D0AC1D2EB856&lt;/UserGU&gt;&lt;ParentGU&gt;FE5E598C-0641-4421-B2EC-D0AC1D2EB856&lt;/ParentGU&gt;&lt;FaceDetectionDocumentData xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot; &gt;&lt;DocumentDatas&gt;&lt;DocumentData Delete=&quot;true&quot; FileName=&quot;&quot; FileType=&quot;PNG&quot; Description=&quot;&quot; Base64Code=&quot;&quot; /&gt;&lt;/DocumentDatas&gt;&lt;/FaceDetectionDocumentData&gt;&lt;/Parms&gt;`,
            null,
            this.parent
          )
        );
    }

    getParentAccountInfo() {
        return this._xmlJsonSerialize(
          this._makeServiceRequest(
            'GetMyAccountData',
            {},
            null,
            this.parent
          )
        );
    }

    uploadParentPhoto(parentGU,photoData) {
        return this._xmlJsonSerialize(
          this._makeServiceRequest(
            'AttachParentPhoto',
            `&lt;Parms&gt;&lt;UserGU&gt;FE5E598C-0641-4421-B2EC-D0AC1D2EB856&lt;/UserGU&gt;&lt;ParentGU&gt;FE5E598C-0641-4421-B2EC-D0AC1D2EB856&lt;/ParentGU&gt;&lt;FaceDetectionDocumentData xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot; &gt;&lt;DocumentDatas&gt;&lt;DocumentData FileName=&quot;profile_temp.png&quot; FileType=&quot;PNG&quot; Description=&quot;profile_temp.png&quot; Base64Code=&quot;${photoData}&quot; /&gt;&lt;/DocumentDatas&gt;&lt;/FaceDetectionDocumentData&gt;&lt;/Parms&gt;`,
            null,
            this.parent
          )
        );
    }

    listReportCards(child) {
        return this._xmlJsonSerialize(this._makeServiceRequest('GetReportCardInitialData',this.parent?{ChildIntID:child}:{},null,this.parent));
    }

    getReportCard(documentGuid,child) {
        return this._xmlJsonSerialize(this._makeServiceRequest('GetReportCardDocumentData', { DocumentGU: documentGuid,ChildIntID:this.parent?child:0 },null,this.parent));
    }

    listDocuments(child) {
        return this._xmlJsonSerialize(this._makeServiceRequest('GetStudentDocumentInitialData',this.parent?{ChildIntID:child}:{},null,this.parent));
    }

    getDocument(documentGuid,child) {
        return this._xmlJsonSerialize(this._makeServiceRequest('GetContentOfAttachedDoc', { DocumentGU: documentGuid,child:this.parent?child:0 },null,this.parent));
    }

    _xmlJsonSerialize(servicePromise) {
        return servicePromise.then(result => { return result[0].ProcessWebServiceRequestResult });
    }

    _makeServiceRequest(methodName, params = {}, serviceHandle = 'PXPWebServices', isParent) {
      if(serviceHandle===null){serviceHandle="PXPWebServices"}
        let paramStr = '&lt;Parms&gt;';
      if(typeof params ==='string') {paramStr=params} else {
        Object.entries(params).forEach(([key, value]) => {
            paramStr += '&lt;' + key + '&gt;';
            paramStr += value;
            paramStr += '&lt;/' + key + '&gt;';
        });
        paramStr += '&lt;/Parms&gt;';
      }

        return this.client.ProcessWebServiceRequestAsync({
            userID: this.username,
            password: this.password,
            skipLoginLog: 1,
            parent: isParent?1:0,
            webServiceHandleName: serviceHandle,
            methodName,
            paramStr
        });
    }
}

function login(url, username, password, parent,soapOptions = {}) {
    const endpoint = `${ url }/Service/PXPCommunication.asmx`;

    const resolvedOptions = Object.assign({
        endpoint: endpoint, // enforces https
        escapeXML: false
    }, soapOptions);

    const wsdlURL = endpoint + '?WSDL';

    return soap.createClientAsync(wsdlURL, resolvedOptions)
        .then(client => new StudentVueClient(username, password, client,parent?true:false));
}

function getDistrictUrls(zipCode,parent) {
    return soap.createClientAsync('https://support.edupoint.com/Service/HDInfoCommunication.asmx?WSDL', {
        endpoint: 'https://support.edupoint.com/Service/HDInfoCommunication.asmx',
        escapeXML: false
    })
        .then(client => {
            const supportClient = new StudentVueClient('EdupointDistrictInfo', 'Edup01nt', client);
            return supportClient._xmlJsonSerialize(supportClient._makeServiceRequest('GetMatchingDistrictList', {
                MatchToDistrictZipCode: zipCode,
                Key: parent?'AD4F3EFA-31B5-41F3-BBD8-8447B2058A99':'5E4B7859-B805-474B-A833-FDB15D205D40' // idk how safe this is
            }, 'HDInfoServices',parent));
        });
}

module.exports = { login, getDistrictUrls };
