window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13314","name":"V_HY_DZ_BorrowOutBack","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW V_HY_DZ_BorrowOutBack     \r\nAS     \r\nselect     \r\nt1.ID,t1.ivtid,t1.cCODE,t1.cType,t1.bObjectCode,t1.cpersoncode, t1.csysbarcode,   \r\nt1.cdepcode,t1.cmemo,t1.cMaker,    \r\nt1.cHandler,t1.CloseUser,    \r\nt1.IntoUser,t1.iverifystate,    \r\nconvert(nvarchar(10),t1.ddate,120) as ddate,          --订单日期    \r\nconvert(nvarchar(10),t1.dVeriDate,120) as dVeriDate,  --审核日期    \r\nconvert(nvarchar(10),t1.dCloseDate,120) as dCloseDate,--关闭日期    \r\nconvert(nvarchar(10),t1.dmDate,120)as dmDate    ,     --制单日期    \r\nconvert(nvarchar(10),t1.dIntoDate,120) as dIntoDate,  --生单日期    \r\ncase t1.iStatus when 1 then N'新建' when 2 then N'审核' when 3 then N'生单' when 4 then N'关闭' end iStatus , --状态 1:正常 2:审核 3:生单 4:关闭     \r\ncase t1.cType when N'客户' then t6.ccusabbname when N'供应商' then t7.cvenabbname when  N'部门' then t8.cdepname when N'最终用户' then t9.finaluser_name end bObjectName , --状态 1:正常 2:审核 3:生单 4:关闭     \r\nt1.iswfcontrolled,t1.ireturncount,    \r\nt1.cdefine1,t1.cdefine2,t1.cdefine3,    \r\nt1.cdefine5,t1.cdefine7,t1.cdefine8,    \r\nt1.cdefine9,t1.cdefine10,t1.cdefine11,t1.cdefine12,t1.cdefine13,    \r\nt1.cdefine14,t1.cdefine15,t1.cdefine16,    \r\nconvert(nvarchar(10),t1.cdefine4,120) as cdefine4,    \r\nconvert(nvarchar(10),t1.cdefine6,120) as cdefine6,    \r\n--'' as ufts , --    \r\nconvert(nchar,convert(money,t1.ufts),2) ufts,    \r\n t1.cContactperson,t1.cContactWay, --t1.cCreateType,t1.cAboutVoucher,t1.cCodeAboutVoucher,     \r\nt1.cfreight,t1.cfreightType,t1.cfreightCompany,t1.cfreightCost,    \r\nN'借出归还单(' + t1.cCODE + N')生单' as MycdefineT1,--t1.MycdefineT1    \r\nvendor2.cvenname as MycdefineT2,    \r\nt1.MycdefineT3,    \r\nt1.MycdefineT4,t1.MycdefineT5,tf.cSCName as MycdefineT6,--t1.MycdefineT6,    \r\nt1.MycdefineT7,t1.MycdefineT8,    \r\nt1.MycdefineT9,t1.MycdefineT10,t1.DownstreamCode,t1.UpStreamCode,    \r\nt3.cdepname,t4.cpersonname ,    \r\nT1.ID as cVoucherId,T1.ID as VoucherId,t1.ccode as VoucherCode, t1.VoucherType as VoucherType    \r\n,t1.crdcode,t1.rrdcode,ca.crdname as ccoutname,cb.crdname as rcoutname ,t1.type_id   \r\nfrom HY_DZ_BorrowOutBack t1    \r\nleft join Department t3 on t3.cdepcode=t1.cdepcode    \r\nleft join Person t4 on t4.cpersoncode=t1.cpersoncode    \r\nleft join vendor vendor2 on  vendor2.cvencode=t1.cfreightCompany    \r\nleft join ShippingChoice tf on  tf.cSCCode=t1.cfreightType    \r\nleft join Customer  t6 on t6.ccuscode =t1.bObjectCode    \r\nleft join vendor t7 on t7.cvencode=t1.bObjectCode    \r\nleft join Department t8 on t8.cdepcode=t1.bObjectCode    \r\nleft join Rd_Style ca on ca.crdcode=t1.crdcode    \r\nleft join Rd_Style cb on cb.crdcode=t1.rrdcode  \r\nleft join tc_finaluser t9 on convert(nvarchar(26),t9.finaluser_id,120)=t1.bObjectCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_HY_DZ_BorrowOutBack"},{"field":"Type","value":"View"}],"columns":[{"id":"column-363761","object_id":"column-363761","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363762","object_id":"column-363762","name":"ivtid","name_without_path":"ivtid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363763","object_id":"column-363763","name":"cCODE","name_without_path":"cCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363764","object_id":"column-363764","name":"cType","name_without_path":"cType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363765","object_id":"column-363765","name":"bObjectCode","name_without_path":"bObjectCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363766","object_id":"column-363766","name":"cpersoncode","name_without_path":"cpersoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363767","object_id":"column-363767","name":"csysbarcode","name_without_path":"csysbarcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363768","object_id":"column-363768","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363769","object_id":"column-363769","name":"cmemo","name_without_path":"cmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363770","object_id":"column-363770","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363771","object_id":"column-363771","name":"cHandler","name_without_path":"cHandler","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363772","object_id":"column-363772","name":"CloseUser","name_without_path":"CloseUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363773","object_id":"column-363773","name":"IntoUser","name_without_path":"IntoUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363774","object_id":"column-363774","name":"iverifystate","name_without_path":"iverifystate","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363775","object_id":"column-363775","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363776","object_id":"column-363776","name":"dVeriDate","name_without_path":"dVeriDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363777","object_id":"column-363777","name":"dCloseDate","name_without_path":"dCloseDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363778","object_id":"column-363778","name":"dmDate","name_without_path":"dmDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363779","object_id":"column-363779","name":"dIntoDate","name_without_path":"dIntoDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363780","object_id":"column-363780","name":"iStatus","name_without_path":"iStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363781","object_id":"column-363781","name":"bObjectName","name_without_path":"bObjectName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363782","object_id":"column-363782","name":"iswfcontrolled","name_without_path":"iswfcontrolled","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363783","object_id":"column-363783","name":"ireturncount","name_without_path":"ireturncount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363784","object_id":"column-363784","name":"cdefine1","name_without_path":"cdefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363785","object_id":"column-363785","name":"cdefine2","name_without_path":"cdefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363786","object_id":"column-363786","name":"cdefine3","name_without_path":"cdefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363787","object_id":"column-363787","name":"cdefine5","name_without_path":"cdefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363788","object_id":"column-363788","name":"cdefine7","name_without_path":"cdefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363789","object_id":"column-363789","name":"cdefine8","name_without_path":"cdefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363790","object_id":"column-363790","name":"cdefine9","name_without_path":"cdefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363791","object_id":"column-363791","name":"cdefine10","name_without_path":"cdefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363792","object_id":"column-363792","name":"cdefine11","name_without_path":"cdefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363793","object_id":"column-363793","name":"cdefine12","name_without_path":"cdefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363794","object_id":"column-363794","name":"cdefine13","name_without_path":"cdefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363795","object_id":"column-363795","name":"cdefine14","name_without_path":"cdefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363796","object_id":"column-363796","name":"cdefine15","name_without_path":"cdefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363797","object_id":"column-363797","name":"cdefine16","name_without_path":"cdefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363798","object_id":"column-363798","name":"cdefine4","name_without_path":"cdefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363799","object_id":"column-363799","name":"cdefine6","name_without_path":"cdefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363800","object_id":"column-363800","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363801","object_id":"column-363801","name":"cContactperson","name_without_path":"cContactperson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363802","object_id":"column-363802","name":"cContactWay","name_without_path":"cContactWay","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363803","object_id":"column-363803","name":"cfreight","name_without_path":"cfreight","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363804","object_id":"column-363804","name":"cfreightType","name_without_path":"cfreightType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363805","object_id":"column-363805","name":"cfreightCompany","name_without_path":"cfreightCompany","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363806","object_id":"column-363806","name":"cfreightCost","name_without_path":"cfreightCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"32, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363807","object_id":"column-363807","name":"MycdefineT1","name_without_path":"MycdefineT1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"39","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363808","object_id":"column-363808","name":"MycdefineT2","name_without_path":"MycdefineT2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363809","object_id":"column-363809","name":"MycdefineT3","name_without_path":"MycdefineT3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363810","object_id":"column-363810","name":"MycdefineT4","name_without_path":"MycdefineT4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363811","object_id":"column-363811","name":"MycdefineT5","name_without_path":"MycdefineT5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363812","object_id":"column-363812","name":"MycdefineT6","name_without_path":"MycdefineT6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363813","object_id":"column-363813","name":"MycdefineT7","name_without_path":"MycdefineT7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363814","object_id":"column-363814","name":"MycdefineT8","name_without_path":"MycdefineT8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363815","object_id":"column-363815","name":"MycdefineT9","name_without_path":"MycdefineT9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363816","object_id":"column-363816","name":"MycdefineT10","name_without_path":"MycdefineT10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363817","object_id":"column-363817","name":"DownstreamCode","name_without_path":"DownstreamCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363818","object_id":"column-363818","name":"UpStreamCode","name_without_path":"UpStreamCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363819","object_id":"column-363819","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363820","object_id":"column-363820","name":"cpersonname","name_without_path":"cpersonname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363821","object_id":"column-363821","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363822","object_id":"column-363822","name":"VoucherId","name_without_path":"VoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363823","object_id":"column-363823","name":"VoucherCode","name_without_path":"VoucherCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363824","object_id":"column-363824","name":"VoucherType","name_without_path":"VoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363825","object_id":"column-363825","name":"crdcode","name_without_path":"crdcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363826","object_id":"column-363826","name":"rrdcode","name_without_path":"rrdcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363827","object_id":"column-363827","name":"ccoutname","name_without_path":"ccoutname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363828","object_id":"column-363828","name":"rcoutname","name_without_path":"rcoutname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363829","object_id":"column-363829","name":"type_id","name_without_path":"type_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};