import React from "react";

const login = () => {
	return (
		<form>
			<div className="bg-white min-h-[calc(100vh-60px)] text-black flex justify-center items-center">
				<div className=" flex flex-col gap-2 max-w-[70%] justify-center items-center border px-15 py-10 rounded-md ">
					<input
						placeholder="UserName"
						type="text"
						required
						className="rounded-sm bg-white border-gray-400 border hover:border-gray-700  px-3 py-2"
					/>
					<input
						placeholder="mail@gmail.com"
						type="email"
						required
						className="rounded-sm bg-white border-gray-400 border hover:border-gray-700  px-3 py-2"
					/>
					<input
						placeholder="UserName"
						type="password"
						required
						className="rounded-sm bg-white border-gray-400 border hover:border-gray-700  px-3 py-2"
					/>

					<input
						type="submit"
						placeholder="Signin"
						className="border rounded-md px-2 py-1 mt-5 hover:bg-gray-400"
					/>
					<span className="flex w-full justify-center items-center">
						{" "}
						<hr className="h-3 w-5" />
						OR
						<hr />
					</span>
				</div>
			</div>
		</form>
	);
};

export default login;
