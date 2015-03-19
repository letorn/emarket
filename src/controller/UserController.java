package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("user/")
public class UserController {

	@RequestMapping("findByName.do")
	@ResponseBody
	public String findByName(String name) {
		return "Wito Lee, 25, 476401172";
	}

}
