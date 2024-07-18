window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11310","name":"hr_v_ht_edu","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view hr_v_ht_edu as select ht.cPsn_Num,ht.vcontractcode,_alias_ref1.vDescription as rHtState,_alias_ref2.vDescription as rSignState,ht.iConTimes,convert(nchar(10),ht.dsigndate,121) as dsigndate,ht.iLimit,convert(nchar(10),ht.dbegindate,121) as dbegindate,convert(nchar(10),ht.denddate,121) as denddate,ht.iEduPeriod,convert(nchar(10),ht.dEduStartDate,121) as dEduStartDate,convert(nchar(10),ht.dEduEndDate,121) as dEduEndDate,_alias_ref3.vdescription as rEduType,ht.vEduContent,_alias_ref4.vdescription as rEduMethod,ht.nEduPay,_alias_ref5.vDescription as rEduAfford,ht.iWorkYear,convert(nchar(10),ht.dEndDate2,121) as dEndDate2,convert(nchar(10),ht.dCancelDate,121) as dCancelDate,_alias_ref6.vDescription as rcancelReason,ht.vcancelDocNo,ht.nunitPay,ht.nUnitPaid,ht.npersonalPay,ht.nPersonPaid,case ht.bChanged when '1' then dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00001') else dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00002') end as bChanged,ht.vmemo,ci.vHTChangeNo,ci.vHtType,ci.vHTNo,_alias_ref7.vdescription as vHTChangeReason,convert(nchar(10),ci.vHTChangeDate,121) as vHTChangeDate,ci.vHTChangeContent,ci.vHTChangeRemark,ci.pk_hr_ht_changeinfo,p.cpsn_name,d.cdepcode,d.cdepname \r\nfrom hr_ht_edu ht inner join hr_ht_changeinfo ci on(ht.pk_hr_ht_edu=ci.vhtno) \r\ninner join hr_hi_person p on(ht.cpsn_num=p.cpsn_num) \r\ninner join department d on(p.cdept_num=d.cdepcode)  left join HR_CT151 as _alias_ref1 on(ht.rHtState=_alias_ref1.cCodeID) left join HR_CT154 as _alias_ref2 on(ht.rSignState=_alias_ref2.cCodeID) left join HR_CT118 as _alias_ref3 on(ht.rEduType=_alias_ref3.ccodeid) left join HR_CT026 as _alias_ref4 on(ht.rEduMethod=_alias_ref4.ccodeid) left join HR_CT152 as _alias_ref5 on(ht.rEduAfford=_alias_ref5.cCodeID) left join HR_CT153 as _alias_ref6 on(ht.rcancelReason=_alias_ref6.cCodeID) left join HR_CT036 as _alias_ref7 on(ci.vHTChangeReason=_alias_ref7.ccodeid)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_ht_edu"},{"field":"Type","value":"View"}],"columns":[{"id":"column-225385","object_id":"column-225385","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225386","object_id":"column-225386","name":"vcontractcode","name_without_path":"vcontractcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225387","object_id":"column-225387","name":"rHtState","name_without_path":"rHtState","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225388","object_id":"column-225388","name":"rSignState","name_without_path":"rSignState","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225389","object_id":"column-225389","name":"iConTimes","name_without_path":"iConTimes","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225390","object_id":"column-225390","name":"dsigndate","name_without_path":"dsigndate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225391","object_id":"column-225391","name":"iLimit","name_without_path":"iLimit","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225392","object_id":"column-225392","name":"dbegindate","name_without_path":"dbegindate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225393","object_id":"column-225393","name":"denddate","name_without_path":"denddate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225394","object_id":"column-225394","name":"iEduPeriod","name_without_path":"iEduPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225395","object_id":"column-225395","name":"dEduStartDate","name_without_path":"dEduStartDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225396","object_id":"column-225396","name":"dEduEndDate","name_without_path":"dEduEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225397","object_id":"column-225397","name":"rEduType","name_without_path":"rEduType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225398","object_id":"column-225398","name":"vEduContent","name_without_path":"vEduContent","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"600","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225399","object_id":"column-225399","name":"rEduMethod","name_without_path":"rEduMethod","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225400","object_id":"column-225400","name":"nEduPay","name_without_path":"nEduPay","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225401","object_id":"column-225401","name":"rEduAfford","name_without_path":"rEduAfford","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225402","object_id":"column-225402","name":"iWorkYear","name_without_path":"iWorkYear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225403","object_id":"column-225403","name":"dEndDate2","name_without_path":"dEndDate2","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225404","object_id":"column-225404","name":"dCancelDate","name_without_path":"dCancelDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225405","object_id":"column-225405","name":"rcancelReason","name_without_path":"rcancelReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225406","object_id":"column-225406","name":"vcancelDocNo","name_without_path":"vcancelDocNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225407","object_id":"column-225407","name":"nunitPay","name_without_path":"nunitPay","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225408","object_id":"column-225408","name":"nUnitPaid","name_without_path":"nUnitPaid","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225409","object_id":"column-225409","name":"npersonalPay","name_without_path":"npersonalPay","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225410","object_id":"column-225410","name":"nPersonPaid","name_without_path":"nPersonPaid","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225411","object_id":"column-225411","name":"bChanged","name_without_path":"bChanged","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225412","object_id":"column-225412","name":"vmemo","name_without_path":"vmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225413","object_id":"column-225413","name":"vHTChangeNo","name_without_path":"vHTChangeNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225414","object_id":"column-225414","name":"vHtType","name_without_path":"vHtType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225415","object_id":"column-225415","name":"vHTNo","name_without_path":"vHTNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225416","object_id":"column-225416","name":"vHTChangeReason","name_without_path":"vHTChangeReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225417","object_id":"column-225417","name":"vHTChangeDate","name_without_path":"vHTChangeDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225418","object_id":"column-225418","name":"vHTChangeContent","name_without_path":"vHTChangeContent","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225419","object_id":"column-225419","name":"vHTChangeRemark","name_without_path":"vHTChangeRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225420","object_id":"column-225420","name":"pk_hr_ht_changeinfo","name_without_path":"pk_hr_ht_changeinfo","description":null,"is_pk":false,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225421","object_id":"column-225421","name":"cpsn_name","name_without_path":"cpsn_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225422","object_id":"column-225422","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225423","object_id":"column-225423","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};