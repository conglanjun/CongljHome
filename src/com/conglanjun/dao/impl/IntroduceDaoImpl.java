package com.conglanjun.dao.impl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.conglanjun.bean.Introduce;
import com.conglanjun.dao.IntroduceDao;

public class IntroduceDaoImpl implements IntroduceDao {

	@Resource
	public SessionFactory sessionFactory;
	
	public Session getSession(){
		return sessionFactory.openSession();
	}
	
	@Override
	public List<Introduce> searchIntroduces() {
		Query query = getSession().createQuery("from Introduce");
		List<Introduce> is = query.list();
		return is;
	}

}
