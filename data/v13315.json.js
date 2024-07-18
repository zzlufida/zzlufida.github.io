window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13315","name":"V_HY_DZ_BorrowOutBack_CRM","subtype":"VIEW","is_user_defined":false,"description":null,"script":"-- 借出归还单改审批状态  \r\nCREATE view  [V_HY_DZ_BorrowOutBack_CRM]  \r\nas  \r\nselect             \r\nt1.ID,t1.ivtid,t1.cCODE,t1.cType,t1.bObjectCode,t1.cpersoncode, t1.csysbarcode,           \r\nt1.cdepcode,t1.cmemo,t1.cMaker,            \r\nt1.cHandler,t1.CloseUser,            \r\nt1.IntoUser,\r\n--isnull(t1.iverifystate,0) as iverifystate, \r\niverifystate =case isnull(t1.iverifystate,0) when 0 then case t1.iStatus when 2 then 2 when 1 then 0 end else isnull(t1.iverifystate,0)  end,       \r\nt1.ddate ,--convert(nvarchar(10),t1.ddate,120) as ddate,          --订单日期        \r\nt1.dVeriDate , --convert(nvarchar(10),t1.dVeriDate,120) as dVeriDate,  --审核日期        \r\nt1.dCloseDate , --convert(nvarchar(10),t1.dCloseDate,120) as dCloseDate,--关闭日期        \r\nt1.dmDate, --convert(nvarchar(10),t1.dmDate,120)as dmDate    ,     --制单日期        \r\nt1.dIntoDate, -- convert(nvarchar(10),t1.dIntoDate,120) as dIntoDate,  --生单日期            \r\ncase t1.iStatus when 1 then N'新建' when 2 then N'审核' when 3 then N'生单' when 4 then N'关闭' end iStatus , --状态 1:正常 2:审核 3:生单 4:关闭             \r\ncase t1.cType when N'客户' then t6.ccusabbname when N'供应商' then t7.cvenabbname when  N'部门' then t8.cdepname when  N'最终用户' then t9.finaluser_name  end bObjectName , --状态 1:正常 2:审核 3:生单 4:关闭             \r\nt1.iswfcontrolled,t1.ireturncount,            \r\nt1.cdefine1,t1.cdefine2,t1.cdefine3,            \r\nt1.cdefine5,t1.cdefine7,t1.cdefine8,            \r\nt1.cdefine9,t1.cdefine10,t1.cdefine11,t1.cdefine12,t1.cdefine13,            \r\nt1.cdefine14,t1.cdefine15,t1.cdefine16,            \r\nconvert(nvarchar(10),t1.cdefine4,120) as cdefine4,            \r\nconvert(nvarchar(10),t1.cdefine6,120) as cdefine6,             \r\nconvert(nchar,convert(money,t1.ufts),2) ufts,            \r\n t1.cContactperson,t1.cContactWay,           \r\nt1.cfreight,t1.cfreightType,t1.cfreightCompany,t1.cfreightCost,            \r\nN'借出归还单(' + t1.cCODE + N')生单' as MycdefineT1,         \r\n(select case isnull(cborrowouttype,0) when 1 then '1001' when 2 then '1003' else '1002' EnD        \r\n from HY_DZ_BorrowOut where HY_DZ_BorrowOut.ID = (select top 1 ID from HY_DZ_BorrowOuts where HY_DZ_BorrowOuts.AutoID =         \r\n (select top 1 UpAutoID from HY_DZ_BorrowOutBacks where HY_DZ_BorrowOutBacks.ID = t1.ID))) as BorrowOutType ,          \r\nvendor2.cvenname as MycdefineT2,            \r\n(select case isnull(cborrowouttype,0) when 2 then '备机归还'   else '借出归还' EnD        \r\n from HY_DZ_BorrowOut where HY_DZ_BorrowOut.ID = (select top 1 ID from HY_DZ_BorrowOuts where HY_DZ_BorrowOuts.AutoID =         \r\n (select top 1 UpAutoID from HY_DZ_BorrowOutBacks where HY_DZ_BorrowOutBacks.ID = t1.ID))) as MycdefineT3,            \r\nt1.MycdefineT4,    \r\n isnull((select top 1 1 from HY_DZ_BorrowOutBacks where HY_DZ_BorrowOutBacks.ID = t1.ID and diffBack = N'是'),0) AS MycdefineT5,    \r\ntf.cSCName as MycdefineT6,          \r\nt1.MycdefineT7,        \r\nN'借出归还单' as MycdefineT8,         \r\n t1.MycdefineT9,t1.MycdefineT10,t1.DownstreamCode,t1.UpStreamCode,            \r\nt3.cdepname,t4.cpersonname ,            \r\nT1.ID as cVoucherId,T1.ID as VoucherId,t1.ccode as VoucherCode, t1.VoucherType as VoucherType            \r\n,t1.crdcode,t1.rrdcode,ca.crdname as ccoutname,cb.crdname as rcoutname ,isnull(t1.type_id,25) as  [type_id] ,        \r\n(select case isnull(cborrowouttype,0) when 1 then '1002' when 2 then '1003' else '1001' EnD        \r\n from HY_DZ_BorrowOut where HY_DZ_BorrowOut.ID = (select top 1 ID from HY_DZ_BorrowOuts where HY_DZ_BorrowOuts.AutoID =         \r\n (select top 1 UpAutoID from HY_DZ_BorrowOutBacks where HY_DZ_BorrowOutBacks.ID = t1.ID))) as cborrowouttype ,        \r\n(select top 1 ID    from HY_DZ_BorrowOuts where HY_DZ_BorrowOuts.AutoID =         \r\n (select top 1 UpAutoID from HY_DZ_BorrowOutBacks where HY_DZ_BorrowOutBacks.ID = t1.ID)) AS BorrowOutID,        \r\n(select cCode        from HY_DZ_BorrowOut where HY_DZ_BorrowOut.ID = (select top 1 ID from HY_DZ_BorrowOuts where HY_DZ_BorrowOuts.AutoID =         \r\n (select top 1 UpAutoID from HY_DZ_BorrowOutBacks where HY_DZ_BorrowOutBacks.ID = t1.ID))) as BorrowOutCode         \r\nfrom HY_DZ_BorrowOutBack t1            \r\nleft join Department t3 on t3.cdepcode=t1.cdepcode            \r\nleft join Person t4 on t4.cpersoncode=t1.cpersoncode            \r\nleft join vendor vendor2 on  vendor2.cvencode=t1.cfreightCompany            \r\nleft join ShippingChoice tf on  tf.cSCCode=t1.cfreightType            \r\nleft join Customer  t6 on t6.ccuscode =t1.bObjectCode            \r\nleft join vendor t7 on t7.cvencode=t1.bObjectCode            \r\nleft join Department t8 on t8.cdepcode=t1.bObjectCode      \r\nleft join tc_finaluser t9 on convert(nvarchar(20),t9.finaluser_id) = t1.bObjectCode            \r\nleft join Rd_Style ca on ca.crdcode=t1.crdcode            \r\nleft join Rd_Style cb on cb.crdcode=t1.rrdcode           \r\nwhere ISNULL(t1.cType,N'')<>N'供应商'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_HY_DZ_BorrowOutBack_CRM"},{"field":"Type","value":"View"}],"columns":[{"id":"column-363830","object_id":"column-363830","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363831","object_id":"column-363831","name":"ivtid","name_without_path":"ivtid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363832","object_id":"column-363832","name":"cCODE","name_without_path":"cCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363833","object_id":"column-363833","name":"cType","name_without_path":"cType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363834","object_id":"column-363834","name":"bObjectCode","name_without_path":"bObjectCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363835","object_id":"column-363835","name":"cpersoncode","name_without_path":"cpersoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363836","object_id":"column-363836","name":"csysbarcode","name_without_path":"csysbarcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363837","object_id":"column-363837","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363838","object_id":"column-363838","name":"cmemo","name_without_path":"cmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363839","object_id":"column-363839","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363840","object_id":"column-363840","name":"cHandler","name_without_path":"cHandler","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363841","object_id":"column-363841","name":"CloseUser","name_without_path":"CloseUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363842","object_id":"column-363842","name":"IntoUser","name_without_path":"IntoUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363843","object_id":"column-363843","name":"iverifystate","name_without_path":"iverifystate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363844","object_id":"column-363844","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363845","object_id":"column-363845","name":"dVeriDate","name_without_path":"dVeriDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363846","object_id":"column-363846","name":"dCloseDate","name_without_path":"dCloseDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363847","object_id":"column-363847","name":"dmDate","name_without_path":"dmDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363848","object_id":"column-363848","name":"dIntoDate","name_without_path":"dIntoDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363849","object_id":"column-363849","name":"iStatus","name_without_path":"iStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363850","object_id":"column-363850","name":"bObjectName","name_without_path":"bObjectName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363851","object_id":"column-363851","name":"iswfcontrolled","name_without_path":"iswfcontrolled","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363852","object_id":"column-363852","name":"ireturncount","name_without_path":"ireturncount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363853","object_id":"column-363853","name":"cdefine1","name_without_path":"cdefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363854","object_id":"column-363854","name":"cdefine2","name_without_path":"cdefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363855","object_id":"column-363855","name":"cdefine3","name_without_path":"cdefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363856","object_id":"column-363856","name":"cdefine5","name_without_path":"cdefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363857","object_id":"column-363857","name":"cdefine7","name_without_path":"cdefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363858","object_id":"column-363858","name":"cdefine8","name_without_path":"cdefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363859","object_id":"column-363859","name":"cdefine9","name_without_path":"cdefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363860","object_id":"column-363860","name":"cdefine10","name_without_path":"cdefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363861","object_id":"column-363861","name":"cdefine11","name_without_path":"cdefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363862","object_id":"column-363862","name":"cdefine12","name_without_path":"cdefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363863","object_id":"column-363863","name":"cdefine13","name_without_path":"cdefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363864","object_id":"column-363864","name":"cdefine14","name_without_path":"cdefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363865","object_id":"column-363865","name":"cdefine15","name_without_path":"cdefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363866","object_id":"column-363866","name":"cdefine16","name_without_path":"cdefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363867","object_id":"column-363867","name":"cdefine4","name_without_path":"cdefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363868","object_id":"column-363868","name":"cdefine6","name_without_path":"cdefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363869","object_id":"column-363869","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363870","object_id":"column-363870","name":"cContactperson","name_without_path":"cContactperson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363871","object_id":"column-363871","name":"cContactWay","name_without_path":"cContactWay","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363872","object_id":"column-363872","name":"cfreight","name_without_path":"cfreight","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363873","object_id":"column-363873","name":"cfreightType","name_without_path":"cfreightType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363874","object_id":"column-363874","name":"cfreightCompany","name_without_path":"cfreightCompany","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363875","object_id":"column-363875","name":"cfreightCost","name_without_path":"cfreightCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"32, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363876","object_id":"column-363876","name":"MycdefineT1","name_without_path":"MycdefineT1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"39","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363877","object_id":"column-363877","name":"BorrowOutType","name_without_path":"BorrowOutType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363878","object_id":"column-363878","name":"MycdefineT2","name_without_path":"MycdefineT2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363879","object_id":"column-363879","name":"MycdefineT3","name_without_path":"MycdefineT3","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363880","object_id":"column-363880","name":"MycdefineT4","name_without_path":"MycdefineT4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363881","object_id":"column-363881","name":"MycdefineT5","name_without_path":"MycdefineT5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363882","object_id":"column-363882","name":"MycdefineT6","name_without_path":"MycdefineT6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363883","object_id":"column-363883","name":"MycdefineT7","name_without_path":"MycdefineT7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363884","object_id":"column-363884","name":"MycdefineT8","name_without_path":"MycdefineT8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363885","object_id":"column-363885","name":"MycdefineT9","name_without_path":"MycdefineT9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363886","object_id":"column-363886","name":"MycdefineT10","name_without_path":"MycdefineT10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363887","object_id":"column-363887","name":"DownstreamCode","name_without_path":"DownstreamCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363888","object_id":"column-363888","name":"UpStreamCode","name_without_path":"UpStreamCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363889","object_id":"column-363889","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363890","object_id":"column-363890","name":"cpersonname","name_without_path":"cpersonname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363891","object_id":"column-363891","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363892","object_id":"column-363892","name":"VoucherId","name_without_path":"VoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363893","object_id":"column-363893","name":"VoucherCode","name_without_path":"VoucherCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363894","object_id":"column-363894","name":"VoucherType","name_without_path":"VoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363895","object_id":"column-363895","name":"crdcode","name_without_path":"crdcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363896","object_id":"column-363896","name":"rrdcode","name_without_path":"rrdcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363897","object_id":"column-363897","name":"ccoutname","name_without_path":"ccoutname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363898","object_id":"column-363898","name":"rcoutname","name_without_path":"rcoutname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363899","object_id":"column-363899","name":"type_id","name_without_path":"type_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363900","object_id":"column-363900","name":"cborrowouttype","name_without_path":"cborrowouttype","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363901","object_id":"column-363901","name":"BorrowOutID","name_without_path":"BorrowOutID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-363902","object_id":"column-363902","name":"BorrowOutCode","name_without_path":"BorrowOutCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};