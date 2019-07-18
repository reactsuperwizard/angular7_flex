export interface TravelBusElement {
    seq:            number;
    busNo:          number;
    busDate:        string;
    name:           string;
    stf:            string;
    iDNo:           number;
    nationality:    string;
    seat:           number;
    grpCode:        string;
    pNR_Date:       string;
    checkin:        boolean;
    dateTime:       string;
};

export const ELEMENT_DATA: TravelBusElement[] = [
    {seq: 1, name: 'Hydrogen', busDate:'26/7/2019', busNo: 468048945,stf:'',
      iDNo:591571192, nationality:'SM', seat:85, grpCode: '909647595', pNR_Date:'1555646587', checkin: false, dateTime:'26/7/2019 19:24'},
    {seq: 2, name: 'Helium', busDate:'31/10/2019', busNo: 1482561401,stf:'',
      iDNo:2584148003, nationality:'CU', seat:20, grpCode: '154138091', pNR_Date:'4290951402', checkin: false, dateTime:'31/10/2019 23:29'},
    {seq: 3, name: 'Lithium', busDate:'25/8/2019', busNo: 3121714012,stf:'',
      iDNo:1382395215, nationality:'PM', seat:81, grpCode: '3924569620', pNR_Date:'2183687460', checkin: false, dateTime:'25/8/2019 23:20'},
    {seq: 4, name: 'Beryllium', busDate:'16/10/2019', busNo: 670257429,stf:'',
      iDNo:2336606210, nationality:'MW', seat:23, grpCode: '3917686236', pNR_Date:'3804785695', checkin: false, dateTime:'16/10/2019 13:28'},
    {seq: 5, name: 'Boron', busDate:'9/7/2019', busNo: 893250068,stf:'',
      iDNo:2876651491, nationality:'NL', seat:93, grpCode: '818473098', pNR_Date:'1682625911', checkin: false, dateTime:'9/7/2019 20:32'},
    {seq: 6, name: 'Carbon', busDate:'11/8/2019', busNo: 1518806189,stf:'',
      iDNo:3123645441, nationality:'NZ', seat:96, grpCode: '2959215578', pNR_Date:'729703065', checkin: false, dateTime:'11/8/2019 4:32'},
    {seq: 7, name: 'Nitrogen', busDate:'13/8/2019', busNo: 1714134988,stf:'',
      iDNo:997003093, nationality:'GN', seat:21, grpCode: '2009976727', pNR_Date:'1364309105', checkin: false, dateTime:'13/8/2019 6:44'},
    {seq: 8, name: 'Oxygen', busDate:'12/7/2019', busNo: 3507051111,stf:'',
      iDNo:3043646720, nationality:'KE', seat:74, grpCode: '830986494', pNR_Date:'2176375645', checkin: false, dateTime:'12/7/2019 16:33'},
    {seq: 9, name: 'Fluorine', busDate:'5/10/2019', busNo: 3887758018,stf:'',
      iDNo:1769497205, nationality:'BL', seat:22, grpCode: '1684341908', pNR_Date:'97171690', checkin: false, dateTime:'5/10/2019 18:24'},
    {seq: 10, name: 'Neon', busDate:'26/10/2019', busNo: 1481436858,stf:'',
      iDNo:987463277, nationality:'TO', seat:56, grpCode: '1962898144', pNR_Date:'3224788200', checkin: false, dateTime:'26/10/2019 11:16'},
    {seq: 11, name: 'Sodium', busDate:'19/9/2019', busNo: 1901093310,stf:'',
      iDNo:13276215, nationality:'BH', seat:14, grpCode: '2859771331', pNR_Date:'371344417', checkin: false, dateTime:'19/9/2019 9:44'},
    {seq: 12, name: 'Magnesium', busDate:'21/8/2019', busNo: 177029800,stf:'',
      iDNo:4054854338, nationality:'EE', seat:70, grpCode: '2641489589', pNR_Date:'3725611570', checkin: false, dateTime:'21/8/2019 14:12'},
    {seq: 13, name: 'Aluminum', busDate:'1/10/2019', busNo: 2855018513,stf:'',
      iDNo:2011170312, nationality:'SO', seat:14, grpCode: '57068147', pNR_Date:'6616314', checkin: false, dateTime:'1/10/2019 6:2'},
    {seq: 14, name: 'Silicon', busDate:'16/7/2019', busNo: 1247251223,stf:'',
      iDNo:1895649292, nationality:'GS', seat:76, grpCode: '4262222204', pNR_Date:'2028784336', checkin: false, dateTime:'16/7/2019 21:29'},
    {seq: 15, name: 'Phosphorus', busDate:'24/8/2019', busNo: 4288609289,stf:'',
      iDNo:807386647, nationality:'IE', seat:21, grpCode: '2602629196', pNR_Date:'1168653229', checkin: false, dateTime:'24/8/2019 7:1'},
    {seq: 16, name: 'Sulfur', busDate:'26/9/2019', busNo: 2686383361,stf:'',
      iDNo:4177306247, nationality:'VA', seat:46, grpCode: '1825357784', pNR_Date:'2876380031', checkin: false, dateTime:'26/9/2019 3:8'},
    {seq: 17, name: 'Chlorine', busDate:'28/7/2019', busNo: 3698500318,stf:'',
      iDNo:2823492839, nationality:'PT', seat:55, grpCode: '3453660851', pNR_Date:'2131621248', checkin: false, dateTime:'28/7/2019 1:54'},
    {seq: 18, name: 'Argon', busDate:'27/9/2019', busNo: 3098976074,stf:'',
      iDNo:2498301249, nationality:'BO', seat:66, grpCode: '2158445830', pNR_Date:'1623557325', checkin: false, dateTime:'27/9/2019 18:27'},
    {seq: 19, name: 'Potassium', busDate:'24/8/2019', busNo: 2050328175,stf:'',
      iDNo:1637781892, nationality:'MV', seat:92, grpCode: '2389317532', pNR_Date:'1175934303', checkin: false, dateTime:'24/8/2019 1:28'},
    {seq: 20, name: 'Calcium', busDate:'8/9/2019', busNo: 4260067458,stf:'',
      iDNo:2509078205, nationality:'HT', seat:94, grpCode: '3418187655', pNR_Date:'3580325690', checkin: false, dateTime:'8/9/2019 12:32'},
  ];