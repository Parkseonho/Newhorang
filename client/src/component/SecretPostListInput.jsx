import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";


const SecretPostListInput = ({ offset, limit, secretPost }) => {


  return (
    <>
    <div className="container flex justify-center mx-auto">
     <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow"></div>
         <table >
           <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-2 text-xs text-gray-500">No</th>
        <th className="px-6 py-2 text-xs text-gray-500">제목</th>
        <th className="px-6 py-2 text-xs text-gray-500">작성일</th>
        <th className="px-6 py-2 text-xs text-gray-500">조회수</th>
      </tr>
      </thead>
    
      {secretPost.slice(offset, offset + limit).map((secretPost, index) =>
        < tbody key={index} class="bg-white divide-y divide-gray-300" >
          <tr class="whitespace-nowrap">
          <td class="px-6 py-4 text-sm text-gray-500 w-20 text-center">{secretPost.id}</td>
          <td class="px-6 py-4 w-64 text-center" ><Link to={`/secretPostDetailPage/${secretPost.id}`}>{secretPost.title}</Link></td>
          <td class="px-6 py-4 text-sm text-center w-32 ">{moment(secretPost.create_date).format('YY.MM.DD')}</td>
          <td class="px-6 py-4  text-sm  text-center">{secretPost.view}</td>
          </tr>
          </tbody>
      )}
      </table>
      </div>
    </div>
  </div>

    </>
  )
}

export default SecretPostListInput;