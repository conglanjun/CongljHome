package com.conglanjun.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.conglanjun.bean.Message;
import com.conglanjun.service.LearnService;
import com.conglanjun.service.impl.LearnServiceImpl;

@Controller
@RequestMapping(value="/learn")
public class LearnController {
	@Resource
	private LearnService learnServiceImpl;
	

	@RequestMapping(value="/createMessage")
	public @ResponseBody Map<String,Object> createMessage(Message message,HttpServletRequest request,HttpServletResponse response){
		Map<String,Object> map = new HashMap<String,Object>();
//		List<WebIntroduce> introduces = webIntroduceDaoImpl.searchIntroduces();
		int id = learnServiceImpl.addMessage(message);
		map.put("id", id);
		return map;
	}
}
