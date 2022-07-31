import React, { useState } from "react";

const Assignment = () => {
  const [data, setData] = useState({});
  const [method, setMethod] = useState('');
  const [isedit, setIsedit] = useState(false);
  const [num, setNum] = useState(0);
  const [dataarray, setDataarray] = useState([]);

  function handleChange (e) {
    setMethod(e.target.value)
    console.log(e.target.value)
  }

  function handleEdit(num) {
    // setData(dataarray.find(num));
    setData(dataarray[num]);
    setMethod(dataarray[num]?.method);
  }
  function handleDelete(num) {
    setDataarray(dataarray.filter((data, index) => index !== num));
  }
  function handleSubmit(event) {
    event.preventDefault();
    const date = event.target.date.value;
    const amount = event.target.amount.value;
    const method = event.target.method.value;
    const remark = event.target.remark.value;
    const data = {
      date: date,
      amount: amount,
      method: method,
      remark: remark,
    };
    if (isedit) {
      dataarray[num] = data;
      setData({});
    } else {
      setDataarray([...dataarray, data]);
    }

    setIsedit(false);
    event.target.reset();
    // setMethod('')
  }
  return (
    <div className="p-4    bg-slate-300 h-screen">
      <div className="m-auto md:w-8/12 bg-white rounded-xl p-3 pr-8">
        <h1 className="text-xl underline font-bold">Receipt Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex my-3 ">
            <label className="font-semibold w-3/12 self-center">
              Date<span className="text-red-600">*</span>
            </label>
            <div className="w-9/12">
              <input
                defaultValue={data?.date}
                required
                type="date"
                name="date"
                placeholder="Enter Date"
                class="input input-bordered w-full  max-w-xs"
              />
            </div>
          </div>
          <div className="flex my-3">
            <label className="font-semibold w-3/12 self-center">
              Amount<span className="text-red-600">*</span>
            </label>
            <div className="w-9/12">
              <input
                defaultValue={data?.amount}
                required
                type="number"
                min={0}
                name="amount"
                placeholder="Enter Amount(in INR)"
                class="input input-bordered w-full  "
              />
            </div>
          </div>
          <div className="flex my-3">
            <label className="font-semibold w-3/12 self-center">
              Payment Mode<span className="text-red-600">*</span>
            </label>
            <div className="w-9/12">
              <select
                name="method"
                value={data?.method} onChange={handleChange}
                className="select select-bordered w-full max-w-xs"
              >
                <option defaultChecked  value="cash" >
                  Cash
                </option>
                <option   value="card">Card</option>
              </select>
            </div>
          </div>
          <div className="flex my-3">
            <label className="font-semibold w-3/12 self-center">Remark</label>
            <div className="w-9/12">
              <input
                defaultValue={data?.remark}
                name="remark"
                type="text"
                placeholder="Enter remark"
                class="input input-bordered w-full  "
              />
            </div>
          </div>

          <div className="flex flex-row-reverse gap-12">
            <button type="submit" className={isedit ? "btn btn-warning" :"btn btn-success"}>
              {isedit ? 'edit' : 'submit'}
            </button>
            <label className="btn btn-outline btn-error">CANCEL</label>
          </div>
        </form>
      </div>

      {/* table section  */}
      <div className="m-auto my-4 md:w-8/12 bg-white rounded-xl p-3 pr-8">
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr className="bg-red-300">
                <th>S/N</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Remark</th>
                <th>Action</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {dataarray?.map((data, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{data.date}</td>
                  <td>{data.amount}</td>
                  <td>{data.method}</td>
                  <td>{data.remark}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(index)}
                      className="btn btn-sm"
                    >
                      delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(index);
                        setIsedit(true);
                        setNum(index);
                      }}
                      className="btn btn-sm"
                    >
                      edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
