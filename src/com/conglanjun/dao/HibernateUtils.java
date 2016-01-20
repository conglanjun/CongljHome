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
			//读取hibernate配置文件
			Configuration cfg = new Configuration().configure("/config/hibernate.cfg.xml");
			serviceRegistry = new ServiceRegistryBuilder().applySettings(cfg.getProperties()).buildServiceRegistry();
			//建立sessionFactory
			factory = cfg.buildSessionFactory(serviceRegistry);
			
//			ServiceRegistryBuilder serviceRegistryBuilder = new ServiceRegistryBuilder();
//			cfg.buildSessionFactory(serviceRegistryBuilder.buildServiceRegistry());
		}catch(Exception e){
			
		}
	}
	
	/**
	 * 打开Session
	 */
	public static Session getSession(){
		return factory.openSession();
	}
	
	/**
	 * 关闭Session
	 */
	public static void closeSession(Session session){
		if(session!=null){
			session.close();
		}
	}
	/**
	 * 获取SessionFactory
	 */
	public static SessionFactory getSessionFactory(){
		return factory;
	}
	
	/**
	 * 获取事务Transaction
	 */
	public static Transaction getTranscation(){
		return getSession().getTransaction();
	}
	
	/**
	 * 提交事务
	 */
	public static void commit(){
		getTranscation().commit();
	}
	
	/**
	 * 回滚
	 */
	public static void rollback(){
		getTranscation().rollback();
	}
}
