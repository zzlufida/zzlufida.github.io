window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11401","name":"hr_v_TR04_show","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_TR04_show as  select  CASE WHEN ( HR_TR_ACTIVITY.benvelop ='1' and @@LANGID = 30) THEN '是' WHEN  HR_TR_ACTIVITY.benvelop ='0' and @@LANGID = 30 then '否'  when HR_TR_ACTIVITY.benvelop='1' and @@LANGID <> 30 then dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00001') ELSE dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00002') END AS benvelop, case isnull(hr_tr_activity.blastflag,1) when '1' then dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00001')  else dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00002') end as blastflag, CASE WHEN ( HR_TR_ACTIVITY.bsendMessage ='1' and @@LANGID = 30) THEN '是' WHEN  HR_TR_ACTIVITY.bsendMessage ='0' and @@LANGID = 30 then '否'  when HR_TR_ACTIVITY.bsendMessage='1' and @@LANGID <> 30 then dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00001') ELSE dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00002') END AS bsendMessage, convert(nvarchar(10),HR_TR_ACTIVITY.dauthorize,121) dauthorize, convert(nvarchar(10),HR_TR_ACTIVITY.dsignupend,121) dsignupend, convert(nvarchar(10),HR_TR_ACTIVITY.dsignupstart,121) dsignupstart, convert(nvarchar(10),HR_TR_ACTIVITY.dtrainend,121) dtrainend, convert(nvarchar(10),HR_TR_ACTIVITY.dtrainstart,121) dtrainstart, convert(nvarchar,convert(money,HR_TR_ACTIVITY.hrts),2) as 'hrts',hr_tr_activity.iRecordID,HR_TR_ACTIVITY.itrainmonth,HR_TR_ACTIVITY.itrainpsnnum,HR_TR_ACTIVITY.itrainseason,HR_TR_ACTIVITY.itrainyear,HR_TR_ACTIVITY.nactualcharge,hr_tr_activity.nstatus2,HR_TR_ACTIVITY.ntrainbudget,HR_TR_ACTIVITY.ntrainperiod,hr_tr_activity.PK_hr_tr_activity,HR_TR_ACTIVITY.vchargeUnit,HR_TR_ACTIVITY.vconnectway,HR_TR_ACTIVITY.vdutyattach,HR_TR_ACTIVITY.vremark,hr_tr_activity.vstatus1,HR_TR_ACTIVITY.vtrainaddress,HR_TR_ACTIVITY.vtrainaim,HR_TR_ACTIVITY.vtraincode,HR_TR_ACTIVITY.vtraincontent,HR_TR_ACTIVITY.vtrainname,HR_TR_ACTIVITY.vtrainobject,HR_TR_ACTIVITY.vtrainsubject, department1.cDepName AS rtraindpt, department1.CDepCode AS rtraindptCode, HR_CT0262.vdescription AS rtrainmode, HR_CT1183.vdescription AS rtraintype, HR_CT1314.vDescription AS rtrainitem, HR_CT2055.vDescription AS rtrainlevel, HR_CT2106.vDescription AS rorgname, hr_hi_Person7.cpsn_name AS rtrainprincipal, hr_hi_Person8.cpsn_name AS rorganizer from HR_TR_ACTIVITY Left join department as department1 on HR_TR_ACTIVITY.rtraindpt=department1.CDepCode Left join HR_CT026 as HR_CT0262 on HR_TR_ACTIVITY.rtrainmode=HR_CT0262.ccodeid Left join HR_CT118 as HR_CT1183 on HR_TR_ACTIVITY.rtraintype=HR_CT1183.ccodeid Left join HR_CT131 as HR_CT1314 on HR_TR_ACTIVITY.rtrainitem=HR_CT1314.cCodeID Left join HR_CT205 as HR_CT2055 on HR_TR_ACTIVITY.rtrainlevel=HR_CT2055.cCodeID Left join HR_CT210 as HR_CT2106 on HR_TR_ACTIVITY.rorgname=HR_CT2106.cCodeID Left join hr_hi_Person as hr_hi_Person7 on HR_TR_ACTIVITY.rtrainprincipal=hr_hi_Person7.cpsn_num Left join hr_hi_Person as hr_hi_Person8 on HR_TR_ACTIVITY.rorganizer=hr_hi_Person8.cpsn_num","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_TR04_show"},{"field":"Type","value":"View"}],"columns":[{"id":"column-228519","object_id":"column-228519","name":"benvelop","name_without_path":"benvelop","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228520","object_id":"column-228520","name":"blastflag","name_without_path":"blastflag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228521","object_id":"column-228521","name":"bsendMessage","name_without_path":"bsendMessage","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228522","object_id":"column-228522","name":"dauthorize","name_without_path":"dauthorize","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228523","object_id":"column-228523","name":"dsignupend","name_without_path":"dsignupend","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228524","object_id":"column-228524","name":"dsignupstart","name_without_path":"dsignupstart","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228525","object_id":"column-228525","name":"dtrainend","name_without_path":"dtrainend","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228526","object_id":"column-228526","name":"dtrainstart","name_without_path":"dtrainstart","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228527","object_id":"column-228527","name":"hrts","name_without_path":"hrts","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228528","object_id":"column-228528","name":"iRecordID","name_without_path":"iRecordID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228529","object_id":"column-228529","name":"itrainmonth","name_without_path":"itrainmonth","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228530","object_id":"column-228530","name":"itrainpsnnum","name_without_path":"itrainpsnnum","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228531","object_id":"column-228531","name":"itrainseason","name_without_path":"itrainseason","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228532","object_id":"column-228532","name":"itrainyear","name_without_path":"itrainyear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228533","object_id":"column-228533","name":"nactualcharge","name_without_path":"nactualcharge","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228534","object_id":"column-228534","name":"nstatus2","name_without_path":"nstatus2","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228535","object_id":"column-228535","name":"ntrainbudget","name_without_path":"ntrainbudget","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228536","object_id":"column-228536","name":"ntrainperiod","name_without_path":"ntrainperiod","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228537","object_id":"column-228537","name":"PK_hr_tr_activity","name_without_path":"PK_hr_tr_activity","description":null,"is_pk":false,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228538","object_id":"column-228538","name":"vchargeUnit","name_without_path":"vchargeUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228539","object_id":"column-228539","name":"vconnectway","name_without_path":"vconnectway","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228540","object_id":"column-228540","name":"vdutyattach","name_without_path":"vdutyattach","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228541","object_id":"column-228541","name":"vremark","name_without_path":"vremark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228542","object_id":"column-228542","name":"vstatus1","name_without_path":"vstatus1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228543","object_id":"column-228543","name":"vtrainaddress","name_without_path":"vtrainaddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228544","object_id":"column-228544","name":"vtrainaim","name_without_path":"vtrainaim","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228545","object_id":"column-228545","name":"vtraincode","name_without_path":"vtraincode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228546","object_id":"column-228546","name":"vtraincontent","name_without_path":"vtraincontent","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"600","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228547","object_id":"column-228547","name":"vtrainname","name_without_path":"vtrainname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228548","object_id":"column-228548","name":"vtrainobject","name_without_path":"vtrainobject","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228549","object_id":"column-228549","name":"vtrainsubject","name_without_path":"vtrainsubject","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228550","object_id":"column-228550","name":"rtraindpt","name_without_path":"rtraindpt","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228551","object_id":"column-228551","name":"rtraindptCode","name_without_path":"rtraindptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228552","object_id":"column-228552","name":"rtrainmode","name_without_path":"rtrainmode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228553","object_id":"column-228553","name":"rtraintype","name_without_path":"rtraintype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228554","object_id":"column-228554","name":"rtrainitem","name_without_path":"rtrainitem","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228555","object_id":"column-228555","name":"rtrainlevel","name_without_path":"rtrainlevel","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228556","object_id":"column-228556","name":"rorgname","name_without_path":"rorgname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228557","object_id":"column-228557","name":"rtrainprincipal","name_without_path":"rtrainprincipal","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228558","object_id":"column-228558","name":"rorganizer","name_without_path":"rorganizer","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};