package com.conglanjun.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

public class HibernateUtils {

	private static SessionFactory factory;
	
	private static ServiceRegistry serviceRegistry;
	
	static{
		try{
			//��ȡhibernate�����ļ�
			Configuration cfg = new Configuration().configure("/config/hibernate.cfg.xml");
			serviceRegistry = new ServiceRegistryBuilder().applySettings(cfg.getProperties()).buildServiceRegistry();
			//����sessionFactory
			factory = cfg.buildSessionFactory(serviceRegistry);
			
//			ServiceRegistryBuilder serviceRegistryBuilder = new ServiceRegistryBuilder();
//			cfg.buildSessionFactory(serviceRegistryBuilder.buildServiceRegistry());
		}catch(Exception e){
			
		}
	}
	
	/**
	 * ��Session
	 */
	public static Session getSession(){
		return factory.openSession();
	}
	
	/**
	 * �ر�Session
	 */
	public static void closeSession(Session session){
		if(session!=null){
			session.close();
		}
	}
	/**
	 * ��ȡSessionFactory
	 */
	public static SessionFactory getSessionFactory(){
		return factory;
	}
	
	/**
	 * ��ȡ����Transaction
	 */
	public static Transaction getTranscation(){
		return getSession().getTransaction();
	}
	
	/**
	 * �ύ����
	 */
	public static void commit(){
		getTranscation().commit();
	}
	
	/**
	 * �ع�
	 */
	public static void rollback(){
		getTranscation().rollback();
	}
}
