import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-recarehistorymonthdetails',
  templateUrl: 'recarehistorymonthdetails.html',
})
export class RecarehistorymonthdetailsPage {
  item:items[];
  item1:items1[];
  mark:cmark[];
  contents:content[];
  services:service[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=[{
      image:"assets/imgs/man.png",
      worktype:"Recipient of Care",
      name:"Barnes",
    },
    {
      image:"assets/imgs/female.png",
      worktype:"Provided By",
      name:"Julie Stevens",
    },
  ];
   this.item1=[{
      //  image:"assets/imgs/h.PNG",
       orgname:"HomeCare First",
       connum:"5555-5555-5555",
       
   },];
   this.mark=[{
    type:"Bathing",
  },
  {
    type:"Grooming",
  },
 ];
  this.contents=[{
    time:"Time In",
    duration:"9.00 am",
    add:"5151, 1st Avenue Rochester, MN 55555",
    loc:"LOCATION VERIFIED BY GPS",
  },
  {
    time:"Time Out",
    duration:"11.00 am",
    add:"5151, 1st Avenue Rochester, MN 55555",
    loc:"LOCATION VERIFIED BY GPS",
  },];
  this.services=[{
    servtype:"DATE OF SERVICE",
    quantity:"April 19,2018",
    servtime:"TOTAL TIME",
    duration:"2H 5M",
  },
  {
    servtype:"SERVICE TYPE",
    quantity:"PCA",
    servtime:"RATIO",
    duration:"1:1",
  },
];
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecarehistorymonthdetailsPage');
  }

}
export class items{
  image:any;
  worktype:String;
  name:String; 
}
export class items1{
  orgname:String;
  connum:any;
  // image:any;
}
export class cmark{
  type:String;
}
export class content{
  time:String;
  duration:any;
  add:String;
  loc:String;
}
export class service{
  servtype:String;
  quantity:any;
  servtime:String;
  duration:any;
}