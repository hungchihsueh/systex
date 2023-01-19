import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
	{
		field: "name",
		headerName: "排放源名稱",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "month",
		headerName: "排放月份",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "category",
		headerName: "燃料別",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "usage",
		headerName: "使用量",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "unit",
		headerName: "使用量單位",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "totalCarbon",
		headerName: "碳排當量總計",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "setting",
		headerName: "操作",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
		renderCell: (val) => {
			return (
				<div className="flex items-center justify-center w-full h-full gap-1 overflow-y-scroll">
					<button className="bg-[#FFC700] rounded-lg p-1">
						<Image
							width={24}
							height={24}
							alt=""
							src={"/icon/search.svg"}
						/>
					</button>
					<button className="bg-[#0075AC] rounded-lg p-1">
						<Image
							width={24}
							height={24}
							alt=""
							src={"/icon/edit.svg"}
						/>
					</button>
				</div>
			);
		},
	},
];

const rows = [
	{
		id: 1,
		name: "1號鍋爐",
		month: "1月",
		category: "自產煤",
		usage: 35,
		unit: "公斤",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 2,
		name: "1號鍋爐",
		month: "1月",
		category: "自產煤",
		usage: 35,
		unit: "公斤",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 3,
		name: "1號鍋爐",
		month: "1月",
		category: "自產煤",
		usage: 35,
		unit: "公斤",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 4,
		name: "1號鍋爐",
		month: "1月",
		category: "自產煤",
		usage: 35,
		unit: "公斤",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 5,
		name: "1號鍋爐",
		month: "1月",
		category: "自產煤",
		usage: 35,
		unit: "公斤",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
];
const columns3 = [
	{
		field: "name",
		headerName: "排放源名稱",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "month",
		headerName: "排放月份",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "usage",
		headerName: "使用量",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "unit",
		headerName: "使用量單位",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "totalCarbon",
		headerName: "碳排當量總計",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "setting",
		headerName: "操作",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
		renderCell: (val) => {
			return (
				<div className="flex items-center justify-center w-full h-full gap-1 overflow-y-scroll">
					<button className="bg-[#FFC700] rounded-lg p-1">
						<Image
							width={24}
							height={24}
							alt=""
							src={"/icon/search.svg"}
						/>
					</button>
					<button className="bg-[#0075AC] rounded-lg p-1">
						<Image
							width={24}
							height={24}
							alt=""
							src={"/icon/edit.svg"}
						/>
					</button>
				</div>
			);
		},
	},
];

const rows3 = [
	{
		id: 1,
		name: "1號鍋爐",
		month: "1月",
		category: "自產煤",
		usage: 35,
		unit: "公斤",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 2,
		name: "1號鍋爐",
		month: "1月",

		usage: 35,
		unit: "公斤",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 3,
		name: "1號鍋爐",
		month: "1月",

		usage: 35,
		unit: "公斤",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 4,
		name: "1號鍋爐",
		month: "1月",
		usage: 35,
		unit: "公斤",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 5,
		name: "1號鍋爐",
		month: "1月",
		usage: 35,
		unit: "公斤",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
];
const columnsSeptic = [
	{
		field: "month",
		headerName: "月份",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "totalMonth",
		headerName: "全廠員工每月出勤總時數(含加班)",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "totalYear",
		headerName: "全廠員工整年度出勤總時數",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "totalDay",
		headerName: "全廠員工整年度出勤總天數",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "totalCarbon",
		headerName: "累積排放量(KgCO2e)",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "setting",
		headerName: "操作",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
		renderCell: (val) => {
			return (
				<div className="flex items-center justify-center w-full h-full gap-1 overflow-y-scroll">
					<button className="bg-[#0075AC] rounded-lg p-1">
						<Image
							width={24}
							height={24}
							alt=""
							src={"/icon/edit.svg"}
						/>
					</button>
				</div>
			);
		},
	},
];

const rowsSeptic = [
	{
		id: 1,
		month: "1月",
		totalMonth: "請輸入該月份加班人數",
		totalYear: "請輸入該月份加班時數",
		totalDay: "顯示數值",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 2,
		month: "1月",
		totalMonth: "請輸入該月份加班人數",
		totalYear: "請輸入該月份加班時數",
		totalDay: "顯示數值",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 3,
		month: "1月",
		totalMonth: "請輸入該月份加班人數",
		totalYear: "請輸入該月份加班時數",
		totalDay: "顯示數值",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 4,
		month: "1月",
		totalMonth: "請輸入該月份加班人數",
		totalYear: "請輸入該月份加班時數",
		totalDay: "顯示數值",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 5,
		month: "1月",
		totalMonth: "請輸入該月份加班人數",
		totalYear: "請輸入該月份加班時數",
		totalDay: "顯示數值",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
];
const columnsRefrigerant = [
	{
		field: "name",
		headerName: "設備名稱",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "month",
		headerName: "冷媒填充月份",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "category",
		headerName: "冷媒種類",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "fill",
		headerName: "冷媒填充量",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "unit",
		headerName: "填充量單位",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "totalCarbon",
		headerName: "碳排當量總計",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
	},
	{
		field: "setting",
		headerName: "操作",
		flex: 1,
		headerAlign: "center",
		headerClassName: "table-header",
		renderCell: (val) => {
			return (
				<div className="flex items-center justify-center w-full h-full gap-1 overflow-y-scroll">
					<button className="bg-[#FFC700] rounded-lg p-1">
						<Image
							width={24}
							height={24}
							alt=""
							src={"/icon/search.svg"}
						/>
					</button>
					<button className="bg-[#0075AC] rounded-lg p-1">
						<Image
							width={24}
							height={24}
							alt=""
							src={"/icon/edit.svg"}
						/>
					</button>
				</div>
			);
		},
	},
];

const rowsRefrigerant = [
	{
		id: 1,
		name: "顯示項目名稱",
		month: "1月",
		category: "顯示量數",
		fill: "顯示量數",
		unit: "顯示使用計算的單位 ",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 2,
		name: "顯示項目名稱",
		month: "1月",
		category: "顯示量數",
		fill: "顯示量數",
		unit: "顯示使用計算的單位 ",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 3,
		name: "顯示項目名稱",
		month: "1月",
		category: "顯示量數",
		fill: "顯示量數",
		unit: "顯示使用計算的單位 ",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 4,
		name: "顯示項目名稱",
		month: "1月",
		category: "顯示量數",
		fill: "顯示量數",
		unit: "顯示使用計算的單位 ",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
	{
		id: 5,
		name: "顯示項目名稱",
		month: "1月",
		category: "顯示量數",
		fill: "顯示量數",
		unit: "顯示使用計算的單位 ",
		totalCarbon: "0.233285984 KgCO2e",
		setting: 1,
	},
];

const CatOne = () => {
	// const[]
	return (
		<div className="h-full">
			<div className="flex items-start justify-between mb-6">
				<div className=" w-full text-2xl font-black text-[#467980]">
					排類別一:直接溫室氣體排放與移除-計量資料新增
				</div>
			</div>
			{/* accordion */}
			{/* 移除mb-1 */}
			<div className="w-full p-3 bg-[#4DA7B0] text-white text-base flex justify-start items-center gap-2">
				<span>1.1 固定式燃料源</span>
				<Image
					width={20}
					height={20}
					alt=""
					src={"/icon/dropdown-arrow.svg"}
				/>
			</div>
			{/* content */}
			{/* 新增背景顏色跟padding */}
			<div className="bg-[rgba(172,194,193,0.2)] p-1">
				{/* 這邊class新增 bg-white */}
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden bg-white">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/煤.svg"}
							className="mr-2"
						/>
						煤
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/汽油.svg"}
							className="mr-2"
						/>
						汽油
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/柴油.svg"}
							className="mr-2"
						/>
						柴油
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/重油.svg"}
							className="mr-2"
						/>
						重油
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/液化石油氣.svg"}
							className="mr-2"
						/>
						液化石油氣
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/天然氣.svg"}
							className="mr-2"
						/>
						天然氣
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/其他燃料.svg"}
							className="mr-2"
						/>
						其他燃料
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/其他燃料油.svg"}
							className="mr-2"
						/>
						其他燃料油
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/其他燃料氣.svg"}
							className="mr-2"
						/>
						其他燃料氣
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/生質燃料.svg"}
							className="mr-2"
						/>
						生質燃料
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
			</div>

			{/* accordion */}
			<div className="w-full mb-1 p-3 bg-[#4DA7B0] text-white text-base flex justify-start items-center gap-2">
				<span>1.2 移動式燃料源</span>
				<Image
					width={20}
					height={20}
					alt=""
					src={"/icon/dropdown-arrow.svg"}
				/>
			</div>
			{/* content */}
			<div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/汽油.svg"}
							className="mr-2"
						/>
						汽油
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/柴油.svg"}
							className="mr-2"
						/>
						柴油
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/電力.svg"}
							className="mr-2"
						/>
						電力
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/其他燃料.svg"}
							className="mr-2"
						/>
						其他燃料
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
			</div>
			{/* accordion */}
			<div className="w-full mb-1 p-3 bg-[#4DA7B0] text-white text-base flex justify-start items-center gap-2">
				<span>1.3 產業過程之直接排放</span>
				<Image
					width={20}
					height={20}
					alt=""
					src={"/icon/dropdown-arrow.svg"}
				/>
			</div>
			{/* content */}
			<div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/乙炔.svg"}
							className="mr-2"
						/>
						乙炔
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows3}
										columns={columns3}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/滲碳方式進行金屬.svg"}
							className="mr-2"
						/>
						滲碳方式進行金屬及製品表面處理
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows3}
										columns={columns3}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
			</div>
			{/* accordion */}
			<div className="w-full mb-1 p-3 bg-[#4DA7B0] text-white text-base flex justify-start items-center gap-2">
				<span>1.4 人為系統所釋放的溫室氣體產生的直接暫時性排放</span>
				<Image
					width={20}
					height={20}
					alt=""
					src={"/icon/dropdown-arrow.svg"}
				/>
			</div>
			{/* content */}
			<div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/乙炔.svg"}
							className="mr-2"
						/>
						消防設備
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows3}
										columns={columns3}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/滲碳方式進行金屬.svg"}
							className="mr-2"
						/>
						氣體絕緣斷路器
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rows3}
										columns={columns3}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/化糞池(工時).svg"}
							className="mr-2"
						/>
						化糞池(工時)
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rowsSeptic}
										columns={columnsSeptic}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
				<div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
					<div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
						<Image
							alt=""
							width={24}
							height={24}
							src={"/icon/冷煤設備.svg"}
							className="mr-2"
						/>
						冷煤設備
					</div>
					<div className="h-full p-7">
						<div className="flex items-center justify-between mb-5">
							<div>
								<span className="mr-1 text-red-500">*</span>當年度使用項目
							</div>
							<div className="flex items-center justify-center gap-4 mb-5">
								<button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/delete.svg"}
									/>
									批量刪除
								</button>
								<button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
									<Image
										width={24}
										height={24}
										alt=""
										src={"/icon/add.svg"}
									/>
									新增項目
								</button>
							</div>
						</div>
						<div className="flex h-full">
							<div className="flex-grow">
								<Box
									sx={{
										height: 500,
										"& .MuiDataGrid-columnSeparator": {
											display: "none",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
											{
												width: "100%",
												display: "flex",
												justifyContent: "center",
												textAlign: "center",
												whiteSpace: "normal",
											},
										"& .table-header": {
											// bgcolor: "#ACC2C180",
											borderColor: "white",
											borderWidth: 1,
										},
										"& .css-f3jnds-MuiDataGrid-columnHeaders": {
											bgcolor: "#ACC2C180",
											color: "#467980",
											fontWeight: "600",
											fontSize: "16px",
										},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
											{
												backgroundColor: "#A3A5BF1A",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
											{
												backgroundColor: "##A3A5BF33",
											},
										"& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
											padding: "14px",
											minHeight: "100px",
											width: "100%",
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
											whiteSpace: "normal",
										},
									}}>
									<DataGrid
										rows={rowsRefrigerant}
										columns={columnsRefrigerant}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										disableSelectionOnClick
										getRowHeight={() => "auto"}
										// getEstimatedRowHeight={() => 150}
									/>
								</Box>
							</div>
						</div>

						<div className="my-3 text-sm">
							<span className="text-[#EB5757]">*</span>
							<span>上傳附件資料</span>
							<span className="text-[#EB5757] text-xs">
								(支援格式JPG、PDF檔案格式)
							</span>
						</div>
						<button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
							<Image
								width={20}
								height={20}
								alt=""
								src="/icon/doc-upload.svg"
								className="mr-2 brightness-200"
							/>
							點擊上傳
						</button>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center w-full gap-5 py-6">
				<button
					className={`rounded-md text-[#289D9B] py-3 px-16 border border-[#289D9B] bg-white`}>
					取消
				</button>
				<button className="rounded-md text-white py-3 px-16 bg-gradient-to-b from-[#63C2CF] to-[#199694]">
					儲存
				</button>
			</div>
		</div>
	);
};

export default CatOne;
