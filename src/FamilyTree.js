import React from "react";
import logo from "./logo.svg";
import "./FamilyTree.css";

const data = {
  name: "Ông Cố Nội",
  gender: "male",
  born: "1901-11-20",
  dead:"1999-11-12",
  partners: [
    {
      role: "wife",
      name: "Vợ I Ông Cố Nội",
    },
    {
      role: "wife",
      name: "Vợ II Ông Cố Nội",
    },
  ],
  childrens: [
    {
      name: "Ông Nội",
      gender: "male",
      born: "1930-12-12",
      partners:[{
          name:"Bà Nội",
          born:"1931-01-23",
          gender:"female"
      }],
      childrens: [
          {
            name:"Bác Hòa",
            gender:"male",
            born:"1955-09-23",
            partners:[{
                name:"Vợ bác Hòa",
                role:"wife",
                gender:"female"
            }],
            childrens:[
                {
                    name:"Trần Đức",
                    gender:"male"
                },{
                    name:"Chị anh Đức",
                    gender:"female"
                }
            ]
          },
          {
            name:"Bác Lành",
            gender:"female",
            childrens:[
                {
                    name:"anh Hải",
                    born:"1980-01-01",
                    gender:"male",
                    partners:[{
                        name:"Vợ anh Hải",
                        gender:"female",
                        born:"1983-09-23"
                    }],
                    childrens:[
                        {
                            name:"Huyền Trang",
                            gender:"female"
                        },{
                            name:"Thu Trang",
                            gender:"female"
                        }
                    ]
                },{
                    name:"Chip Chip",
                    gender:"female",
                    born:"1987-10-12"
                }
            ]
          },
        {
          name: "Bố mình",
          born: "1962-06-10",
          gender:"male",
          partners: [
            {
              role: "wife",
              name: "Mẹ mình",
              born: "1963-09-11",
            },
          ],
          childrens: [
            {
              name: "Trần Quốc Trung",
              gender: "male",
              born: "1992-10-16",
              partners: [
                {
                  role: "wife",
                  name: "Huỳnh Phối Linh",
                  born: "1992-7-24",
                },
              ],
            },
            {
              name: "Trần Thị Trâm Anh",
              gender: "female",
              born:"1994-03-28"
            },
          ],
        },
        {
          name: "Cô Sáu",
          gender: "female",
          born: "1960-12-01",
          partners:[{
              name:"Trần Quân",
              role:"husband",
              gender:"male"
          }],
          childrens: [
            {
              name: "Trần Chiến",
              gender: "male",
              born: "1987-01-02",
            },
          ],
        },
        {
            name:"Chú Tuấn",
            gender:"male",
            born:"1970-10-12",
            partners:[{
                name:"Vợ 1"
            },{
                name:"Vợ 2"
            }],
            childrens:[
                {
                    name:"Trần Thị Linh",
                    gender:"female"
                },
                {
                    name:"Trần Thị Thủy",
                    gender:"female"
                },{
                    name:"Trần Văn Minh",
                    gender:"male"
                }
            ]
        }
      ],
    },
    {
      name: "Anh Ông Nội",
      gender: "male",
      born: "01-10-1928",
      childrens: [],
    },
  ],
};

function FormatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
  
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  }

function renderAge(start,end){
    if(start && end){
        start = FormatDate(start);
        end = FormatDate(end);
        return (` (${start} - ${end})`);
    }else if(start){
        start = FormatDate(start);
        return (` (${start})`);
    }else{
        return '';
    }
}

function renderChild(data) {
  return (
    <ul>
      {data.map((item) => {
        return (
          <li>
            <a href="#" className={item.gender}>
              {item.name + renderAge(item.born, item.dead)}
              {item.partners &&
                item.partners.length &&
                item.partners.map((p) => {
                  return (
                    <div>
                      <br></br>
                      {p.name+ renderAge(p.born, p.dead)}
                    </div>
                  );
                })}
            </a>
            {item.childrens &&
              item.childrens.length > 0 &&
              renderChild(item.childrens)}
          </li>
        );
      })}
    </ul>
  );
}

function FamilyTree() {

  const content = renderChild(data.childrens);

  return (
    <div>
        <h3>Gia phả nhà họ Trần - Nghĩa Hưng, Nam Định</h3>
      <div className="tree">
        <ul>
          <li>
            <a href="#" className={data.gender}>{data.name + renderAge(data.born, data.dead)}</a>
            {content}
          </li>
        </ul>
      </div>
    </div>    
  );
}

export default FamilyTree;
