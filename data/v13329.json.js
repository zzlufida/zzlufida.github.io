window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13329","name":"V_HY_DZ_BorrowOutChange","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW V_HY_DZ_BorrowOutChange       \r\nAS       \r\nselect       \r\nt1.ID,t1.ivtid,t1.cCODE,t1.cType,t1.bObjectCode,t1.cpersoncode, t1.csysbarcode,      \r\nt1.cdepcode,t1.cmemo,t1.cMaker,t1.ChangeType,t1.UpID,t1.cexch_name,t1.iexchrate,      \r\nty.bObjectCode as bObjectCode2,ty.bObjectName as bObjectName2,      \r\nt1.cHandler,t1.CloseUser,      \r\nt1.IntoUser,t1.iverifystate,      \r\nconvert(nvarchar(10),t1.ddate,120) as ddate,          --订单日期      \r\nconvert(nvarchar(10),t1.dVeriDate,120) as dVeriDate,  --审核日期      \r\nconvert(nvarchar(10),t1.dCloseDate,120) as dCloseDate,--关闭日期      \r\nconvert(nvarchar(10),t1.dmDate,120)as dmDate    ,     --制单日期      \r\nconvert(nvarchar(10),t1.dIntoDate,120) as dIntoDate,  --生单日期      \r\ncase t1.iStatus when 1 then N'新建' when 2 then N'审核' when 3 then N'生单' when 4 then N'关闭' end iStatus , --状态 1:正常 2:审核 3:生单 4:关闭       \r\ncase t1.cType when N'客户' then t6.ccusabbname when N'供应商' then t7.cvenabbname when  N'部门' then t8.cdepname when N'最终用户' then t9.finaluser_name end bObjectName , --状态 1:正常 2:审核 3:生单 4:关闭       \r\nt1.iswfcontrolled,t1.ireturncount,      \r\nt1.cdefine1,t1.cdefine2,t1.cdefine3,      \r\nt1.cdefine5,t1.cdefine7,t1.cdefine8,      \r\nt1.cdefine9,t1.cdefine10,t1.cdefine11,t1.cdefine12,t1.cdefine13,      \r\nt1.cdefine14,t1.cdefine15,t1.cdefine16,      \r\nconvert(nvarchar(10),t1.cdefine4,120) as cdefine4,      \r\nconvert(nvarchar(10),t1.cdefine6,120) as cdefine6,      \r\nconvert(nchar,convert(money,t1.ufts),2) ufts,      \r\n t1.cContactperson,t1.cContactWay, --t1.cCreateType,t1.cAboutVoucher,t1.cCodeAboutVoucher,       \r\nt1.cfreight,t1.cfreightType,t1.cfreightCompany,t1.cfreightCost,      \r\nN'借出转换单(' + t1.cCODE + N')生单' as MycdefineT1,--t1.MycdefineT1      \r\nt1.MycdefineT2,--vendor2.cvenname as MycdefineT2,      \r\nt1.MycdefineT3,      \r\nt1.MycdefineT4,t1.MycdefineT5,t1.MycdefineT6,t1.MycdefineT7,t1.MycdefineT8,      \r\nt1.MycdefineT9,t1.MycdefineT10,t1.DownstreamCode,t1.UpStreamCode,      \r\nt3.cdepname,t4.cpersonname ,      \r\nT1.ID as cVoucherId,T1.ID as VoucherId,t1.ccode as VoucherCode, t1.VoucherType as VoucherType,      \r\nt1.caddcode,t1.cZipcode,t1.itax1,t1.cBusType,t1.cSTCode ,st.cSTName,cusadd.cdeliveradd as cshipaddress       \r\n,t1.crdcode,t1.rrdcode,ca.crdname as ccoutname,cb.crdname as rcoutname ,t1.type_id     \r\nfrom HY_DZ_BorrowOutChange t1      \r\nleft join Department t3 on t3.cdepcode=t1.cdepcode      \r\nleft join Person t4 on t4.cpersoncode=t1.cpersoncode      \r\nleft join Customer  t6 on t6.ccuscode =t1.bObjectCode      \r\nleft join vendor t7 on t7.cvencode=t1.bObjectCode      \r\nleft join Department t8 on t8.cdepcode=t1.bObjectCode      \r\nleft join v_HY_DZ_BorrowOut ty on ty.ID=t1.UpID      \r\nleft join cusdeliveradd cusadd on t1.caddcode= cusadd.caddcode AND cusadd.ccuscode = t1.bObjectCode  and  isnull(t1.cType,'') = N'客户'       \r\nleft join SaleType st on st.cSTCode = t1.cSTCode       \r\nleft join Rd_Style ca on ca.crdcode=t1.crdcode      \r\nleft join Rd_Style cb on cb.crdcode=t1.rrdcode   \r\nleft join tc_finaluser t9 on convert(nvarchar(26),t9.finaluser_id,120)=t1.bObjectCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_HY_DZ_BorrowOutChange"},{"field":"Type","value":"View"}],"columns":[{"id":"column-365193","object_id":"column-365193","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365194","object_id":"column-365194","name":"ivtid","name_without_path":"ivtid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365195","object_id":"column-365195","name":"cCODE","name_without_path":"cCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365196","object_id":"column-365196","name":"cType","name_without_path":"cType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365197","object_id":"column-365197","name":"bObjectCode","name_without_path":"bObjectCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365198","object_id":"column-365198","name":"cpersoncode","name_without_path":"cpersoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365199","object_id":"column-365199","name":"csysbarcode","name_without_path":"csysbarcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365200","object_id":"column-365200","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365201","object_id":"column-365201","name":"cmemo","name_without_path":"cmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365202","object_id":"column-365202","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365203","object_id":"column-365203","name":"ChangeType","name_without_path":"ChangeType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365204","object_id":"column-365204","name":"UpID","name_without_path":"UpID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365205","object_id":"column-365205","name":"cexch_name","name_without_path":"cexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365206","object_id":"column-365206","name":"iexchrate","name_without_path":"iexchrate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365207","object_id":"column-365207","name":"bObjectCode2","name_without_path":"bObjectCode2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365208","object_id":"column-365208","name":"bObjectName2","name_without_path":"bObjectName2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365209","object_id":"column-365209","name":"cHandler","name_without_path":"cHandler","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365210","object_id":"column-365210","name":"CloseUser","name_without_path":"CloseUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365211","object_id":"column-365211","name":"IntoUser","name_without_path":"IntoUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365212","object_id":"column-365212","name":"iverifystate","name_without_path":"iverifystate","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365213","object_id":"column-365213","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365214","object_id":"column-365214","name":"dVeriDate","name_without_path":"dVeriDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365215","object_id":"column-365215","name":"dCloseDate","name_without_path":"dCloseDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365216","object_id":"column-365216","name":"dmDate","name_without_path":"dmDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365217","object_id":"column-365217","name":"dIntoDate","name_without_path":"dIntoDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365218","object_id":"column-365218","name":"iStatus","name_without_path":"iStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365219","object_id":"column-365219","name":"bObjectName","name_without_path":"bObjectName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365220","object_id":"column-365220","name":"iswfcontrolled","name_without_path":"iswfcontrolled","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365221","object_id":"column-365221","name":"ireturncount","name_without_path":"ireturncount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365222","object_id":"column-365222","name":"cdefine1","name_without_path":"cdefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365223","object_id":"column-365223","name":"cdefine2","name_without_path":"cdefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365224","object_id":"column-365224","name":"cdefine3","name_without_path":"cdefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365225","object_id":"column-365225","name":"cdefine5","name_without_path":"cdefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365226","object_id":"column-365226","name":"cdefine7","name_without_path":"cdefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365227","object_id":"column-365227","name":"cdefine8","name_without_path":"cdefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365228","object_id":"column-365228","name":"cdefine9","name_without_path":"cdefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365229","object_id":"column-365229","name":"cdefine10","name_without_path":"cdefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365230","object_id":"column-365230","name":"cdefine11","name_without_path":"cdefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365231","object_id":"column-365231","name":"cdefine12","name_without_path":"cdefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365232","object_id":"column-365232","name":"cdefine13","name_without_path":"cdefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365233","object_id":"column-365233","name":"cdefine14","name_without_path":"cdefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365234","object_id":"column-365234","name":"cdefine15","name_without_path":"cdefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365235","object_id":"column-365235","name":"cdefine16","name_without_path":"cdefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365236","object_id":"column-365236","name":"cdefine4","name_without_path":"cdefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365237","object_id":"column-365237","name":"cdefine6","name_without_path":"cdefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365238","object_id":"column-365238","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365239","object_id":"column-365239","name":"cContactperson","name_without_path":"cContactperson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365240","object_id":"column-365240","name":"cContactWay","name_without_path":"cContactWay","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365241","object_id":"column-365241","name":"cfreight","name_without_path":"cfreight","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365242","object_id":"column-365242","name":"cfreightType","name_without_path":"cfreightType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365243","object_id":"column-365243","name":"cfreightCompany","name_without_path":"cfreightCompany","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365244","object_id":"column-365244","name":"cfreightCost","name_without_path":"cfreightCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"32, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365245","object_id":"column-365245","name":"MycdefineT1","name_without_path":"MycdefineT1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"39","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365246","object_id":"column-365246","name":"MycdefineT2","name_without_path":"MycdefineT2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365247","object_id":"column-365247","name":"MycdefineT3","name_without_path":"MycdefineT3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365248","object_id":"column-365248","name":"MycdefineT4","name_without_path":"MycdefineT4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365249","object_id":"column-365249","name":"MycdefineT5","name_without_path":"MycdefineT5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365250","object_id":"column-365250","name":"MycdefineT6","name_without_path":"MycdefineT6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365251","object_id":"column-365251","name":"MycdefineT7","name_without_path":"MycdefineT7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365252","object_id":"column-365252","name":"MycdefineT8","name_without_path":"MycdefineT8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365253","object_id":"column-365253","name":"MycdefineT9","name_without_path":"MycdefineT9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365254","object_id":"column-365254","name":"MycdefineT10","name_without_path":"MycdefineT10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365255","object_id":"column-365255","name":"DownstreamCode","name_without_path":"DownstreamCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365256","object_id":"column-365256","name":"UpStreamCode","name_without_path":"UpStreamCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365257","object_id":"column-365257","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365258","object_id":"column-365258","name":"cpersonname","name_without_path":"cpersonname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365259","object_id":"column-365259","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365260","object_id":"column-365260","name":"VoucherId","name_without_path":"VoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365261","object_id":"column-365261","name":"VoucherCode","name_without_path":"VoucherCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365262","object_id":"column-365262","name":"VoucherType","name_without_path":"VoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365263","object_id":"column-365263","name":"caddcode","name_without_path":"caddcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365264","object_id":"column-365264","name":"cZipcode","name_without_path":"cZipcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365265","object_id":"column-365265","name":"itax1","name_without_path":"itax1","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"28, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365266","object_id":"column-365266","name":"cBusType","name_without_path":"cBusType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365267","object_id":"column-365267","name":"cSTCode","name_without_path":"cSTCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365268","object_id":"column-365268","name":"cSTName","name_without_path":"cSTName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365269","object_id":"column-365269","name":"cshipaddress","name_without_path":"cshipaddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365270","object_id":"column-365270","name":"crdcode","name_without_path":"crdcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365271","object_id":"column-365271","name":"rrdcode","name_without_path":"rrdcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365272","object_id":"column-365272","name":"ccoutname","name_without_path":"ccoutname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365273","object_id":"column-365273","name":"rcoutname","name_without_path":"rcoutname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-365274","object_id":"column-365274","name":"type_id","name_without_path":"type_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};