package com.conglanjun.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.springframework.transaction.annotation.Transactional;

import com.conglanjun.bean.Message;
import com.conglanjun.dao.HibernateUtils;
import com.conglanjun.dao.LearnDao;
@Transactional
public class LearnDaoImpl implements LearnDao {

//	@Resource
//	public SessionFactory sessionFactory;
//	
//	public Session getSession(){
//		return sessionFactory.openSession();
//	}

	@Override
	public List<Message> searchMessages() {
		Query query = HibernateUtils.getSession().createQuery("from Message");
		List<Message> qs = query.list();
		return qs;
	}
	@Transactional
	@Override
	public int insertMessage(Message message) {
		int id = 0;
		try{
			id = (int) HibernateUtils.getSession().save(message);
			System.out.println("id=" + id);
		}catch(Exception e){
			e.printStackTrace();
		}
		return id;
	}

}
