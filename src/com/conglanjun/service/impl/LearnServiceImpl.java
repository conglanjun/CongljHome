package com.conglanjun.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.conglanjun.bean.Message;
import com.conglanjun.dao.LearnDao;
import com.conglanjun.service.LearnService;
@Transactional
@Service
public class LearnServiceImpl implements LearnService{
	@Resource
	private LearnDao learnDaoImpl;

	@Transactional(propagation=Propagation.REQUIRED) 
	@Override
	public int addMessage(Message message) {
		int id = learnDaoImpl.insertMessage(message);
		return id;
	}
	
}
