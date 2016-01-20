package com.conglanjun.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.conglanjun.bean.Introduce;
import com.conglanjun.dao.impl.IntroduceDaoImpl;

@Controller
@RequestMapping(value="/introduce")
public class IntroduceController {
	@Resource
	private IntroduceDaoImpl introduceDaoImpl;
	
	@RequestMapping(value="/searchIntroduce")
	public @ResponseBody Map<String,Object> searchIntroduce(Introduce Introduce,HttpServletRequest request,HttpServletResponse response){
		Map<String,Object> map = new HashMap<String,Object>();
		List<Introduce> introduces = introduceDaoImpl.searchIntroduces();
		map.put("introduces", introduces);
		return map;
	}
}
