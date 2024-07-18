window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11319","name":"hr_v_ht_secret_show","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view hr_v_ht_secret_show as select ht.cPsn_Num,ht.vcontractcode,_alias_ref1.vDescription as rHtState,_alias_ref2.vDescription as rSignState,ht.iConTimes,convert(nchar(10),ht.dsigndate,121) as dsigndate,ht.iLimit,convert(nchar(10),ht.dbegindate,121) as dbegindate,convert(nchar(10),ht.denddate,121) as denddate,convert(nchar(10),ht.dEndDate2,121) as dEndDate2,convert(nchar(10),ht.dCancelDate,121) as dCancelDate,_alias_ref3.vDescription as rcancelReason,ht.vcancelDocNo,ht.nunitPay,ht.nUnitPaid,ht.npersonalPay,ht.nPersonPaid,case ht.bChanged when '1' then dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00001') else dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00002') end as bChanged,ht.vmemo,ci.vHTChangeNo,ci.vHtType,ci.vHTNo,_alias_ref4.vdescription as vHTChangeReason,convert(nchar(10),ci.vHTChangeDate,121) as vHTChangeDate,ci.vHTChangeContent,ci.vHTChangeRemark,ci.pk_hr_ht_changeinfo,p.cpsn_name,d.cdepcode,d.cdepname \r\nfrom hr_ht_secret ht inner join hr_ht_changeinfo ci on(ht.pk_hr_ht_secret=ci.vhtno) \r\ninner join hr_hi_person p on(ht.cpsn_num=p.cpsn_num) \r\ninner join department d on(p.cdept_num=d.cdepcode)  left join HR_CT151 as _alias_ref1 on(ht.rHtState=_alias_ref1.cCodeID) left join HR_CT154 as _alias_ref2 on(ht.rSignState=_alias_ref2.cCodeID) left join HR_CT153 as _alias_ref3 on(ht.rcancelReason=_alias_ref3.cCodeID) left join HR_CT036 as _alias_ref4 on(ci.vHTChangeReason=_alias_ref4.ccodeid)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_ht_secret_show"},{"field":"Type","value":"View"}],"columns":[{"id":"column-225704","object_id":"column-225704","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225705","object_id":"column-225705","name":"vcontractcode","name_without_path":"vcontractcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225706","object_id":"column-225706","name":"rHtState","name_without_path":"rHtState","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225707","object_id":"column-225707","name":"rSignState","name_without_path":"rSignState","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225708","object_id":"column-225708","name":"iConTimes","name_without_path":"iConTimes","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225709","object_id":"column-225709","name":"dsigndate","name_without_path":"dsigndate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225710","object_id":"column-225710","name":"iLimit","name_without_path":"iLimit","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225711","object_id":"column-225711","name":"dbegindate","name_without_path":"dbegindate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225712","object_id":"column-225712","name":"denddate","name_without_path":"denddate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225713","object_id":"column-225713","name":"dEndDate2","name_without_path":"dEndDate2","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225714","object_id":"column-225714","name":"dCancelDate","name_without_path":"dCancelDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225715","object_id":"column-225715","name":"rcancelReason","name_without_path":"rcancelReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225716","object_id":"column-225716","name":"vcancelDocNo","name_without_path":"vcancelDocNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225717","object_id":"column-225717","name":"nunitPay","name_without_path":"nunitPay","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225718","object_id":"column-225718","name":"nUnitPaid","name_without_path":"nUnitPaid","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225719","object_id":"column-225719","name":"npersonalPay","name_without_path":"npersonalPay","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225720","object_id":"column-225720","name":"nPersonPaid","name_without_path":"nPersonPaid","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225721","object_id":"column-225721","name":"bChanged","name_without_path":"bChanged","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225722","object_id":"column-225722","name":"vmemo","name_without_path":"vmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225723","object_id":"column-225723","name":"vHTChangeNo","name_without_path":"vHTChangeNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225724","object_id":"column-225724","name":"vHtType","name_without_path":"vHtType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225725","object_id":"column-225725","name":"vHTNo","name_without_path":"vHTNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225726","object_id":"column-225726","name":"vHTChangeReason","name_without_path":"vHTChangeReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225727","object_id":"column-225727","name":"vHTChangeDate","name_without_path":"vHTChangeDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225728","object_id":"column-225728","name":"vHTChangeContent","name_without_path":"vHTChangeContent","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225729","object_id":"column-225729","name":"vHTChangeRemark","name_without_path":"vHTChangeRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225730","object_id":"column-225730","name":"pk_hr_ht_changeinfo","name_without_path":"pk_hr_ht_changeinfo","description":null,"is_pk":false,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225731","object_id":"column-225731","name":"cpsn_name","name_without_path":"cpsn_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225732","object_id":"column-225732","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225733","object_id":"column-225733","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};