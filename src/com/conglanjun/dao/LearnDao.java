package com.conglanjun.dao;

import java.util.List;

import com.conglanjun.bean.Message;

public interface LearnDao {
	public List<Message> searchMessages();
	public int insertMessage(Message message);
}
