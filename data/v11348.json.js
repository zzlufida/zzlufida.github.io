window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11348","name":"hr_v_RT04_show","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_RT04_show as  select  '' as personType,'' as probateBeginTime,'' as probateEndTime, '' as personTypeCode, hr_rt_register.cPsn_Num,hr_rt_register.cVerifier, convert(nvarchar(10),hr_rt_abilitypsn.dAbMakeDate,121) dAbMakeDate, convert(nvarchar(10),hr_rt_abilitypsn.dAbVerifyDate,121) dAbVerifyDate, convert(nvarchar(10),hr_rt_abilitypsn.dBirthDate,121) dBirthDate, convert(nvarchar(10),hr_rt_abilitypsn.dGraDate,121) dGraDate, convert(nvarchar(10),hr_rt_abilitypsn.dJoinJob,121) dJoinJob, convert(nvarchar(10),hr_rt_register.dMakeDate,121) dMakeDate, convert(nvarchar(10),hr_rt_abilitypsn.dReceDate,121) dReceDate, convert(nvarchar(10),hr_rt_register.dVerifyDate,121) dVerifyDate,hr_rt_abilitypsn.eEmail, convert(nvarchar,convert(money,hr_rt_register.hrts),2) as 'hrts',hr_rt_register.iRecordID,hr_rt_abilitypsn.nDesiredSalary,hr_rt_abilitypsn.PK_hr_rt_abilitypsn,hr_rt_register.PK_hr_rt_register, CASE WHEN ( hr_rt_abilitypsn.bHaveRela ='1' and @@LANGID = 30) THEN '是' WHEN  hr_rt_abilitypsn.bHaveRela ='0' and @@LANGID = 30 then '否'  when hr_rt_abilitypsn.bHaveRela='1' and @@LANGID <> 30 then dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00001') ELSE dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00002') END AS bHaveRela, CASE WHEN ( hr_rt_register.bIsReport ='1' and @@LANGID = 30) THEN '是' WHEN  hr_rt_register.bIsReport ='0' and @@LANGID = 30 then '否'  when hr_rt_register.bIsReport='1' and @@LANGID <> 30 then dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00001') ELSE dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00002') END AS bIsReport, case isnull(hr_rt_register.bLastFlag,1) when '1' then dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00001')  else dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00002') end as bLastFlag, CASE WHEN ( hr_rt_register.blinkplan ='1' and @@LANGID = 30) THEN '是' WHEN  hr_rt_register.blinkplan ='0' and @@LANGID = 30 then '否'  when hr_rt_register.blinkplan='1' and @@LANGID <> 30 then dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00001') ELSE dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00002') END AS blinkplan,hr_rt_register.cAbBillNo,hr_rt_abilitypsn.cAbBusinessId,hr_rt_abilitypsn.cAbInvalider,hr_rt_abilitypsn.cAbMaker,hr_rt_abilitypsn.cAbVerifier,hr_rt_register.cBillNo,hr_rt_register.cBusinessId,hr_rt_register.cInvalider,hr_rt_register.cMaker, convert(nvarchar,convert(money,hr_rt_abilitypsn.ufts),2) as 'ufts',hr_rt_abilitypsn.vAbVerifyNote,hr_rt_abilitypsn.vContactAddr,hr_rt_abilitypsn.vExpeDate,hr_rt_abilitypsn.vIDCardNo,hr_rt_register.vMemo,hr_rt_abilitypsn.vMobile,hr_rt_abilitypsn.vName,hr_rt_abilitypsn.vPhone,hr_rt_abilitypsn.vPostCode,hr_rt_abilitypsn.vRelaDispose,hr_rt_abilitypsn.vRelaName,hr_rt_abilitypsn.vSchool,hr_rt_abilitypsn.vSelfAssessment,hr_rt_register.vSourceType,hr_rt_register.vStatus,hr_rt_register.vVerifyNote, Department1.cDepName AS cDeptCode, Department1.CDepCode AS cDeptCodeCode, HR_CT0012.vdescription AS rSex, HR_CT0023.vdescription AS rMaxEdu, HR_CT0044.vdescription AS vSpecialty, HR_CT0055.vdescription AS rNation, HR_CT0076.vdescription AS rNativePlace, HR_CT0077.vdescription AS rHouseRegister, HR_CT0098.vdescription AS rWedlock, HR_CT3039.vDescription AS rAbilityPsnType, hr_om_job10.Vjobname AS cJobCode, hr_rt_jobchan11.vChanName AS rChanCode, hr_rt_plan12.vPlanName AS cPlanCode from hr_rt_abilitypsn INNER JOIN hr_rt_register ON hr_rt_abilitypsn.cAbBillNo = hr_rt_register.cAbBillNo Left join Department as Department1 on hr_rt_register.cDeptCode=Department1.CDepCode Left join HR_CT001 as HR_CT0012 on hr_rt_abilitypsn.rSex=HR_CT0012.ccodeid Left join HR_CT002 as HR_CT0023 on hr_rt_abilitypsn.rMaxEdu=HR_CT0023.ccodeid Left join HR_CT004 as HR_CT0044 on hr_rt_abilitypsn.vSpecialty=HR_CT0044.ccodeid Left join HR_CT005 as HR_CT0055 on hr_rt_abilitypsn.rNation=HR_CT0055.ccodeid Left join HR_CT007 as HR_CT0076 on hr_rt_abilitypsn.rNativePlace=HR_CT0076.ccodeid Left join HR_CT007 as HR_CT0077 on hr_rt_abilitypsn.rHouseRegister=HR_CT0077.ccodeid Left join HR_CT009 as HR_CT0098 on hr_rt_abilitypsn.rWedlock=HR_CT0098.ccodeid Left join HR_CT303 as HR_CT3039 on hr_rt_abilitypsn.rAbilityPsnType=HR_CT3039.cCodeID Left join hr_om_job as hr_om_job10 on hr_rt_register.cJobCode=hr_om_job10.cJobcode Left join hr_rt_jobchan as hr_rt_jobchan11 on hr_rt_register.rChanCode=hr_rt_jobchan11.cChanCode Left join hr_rt_plan as hr_rt_plan12 on hr_rt_register.cPlanCode=hr_rt_plan12.cBillNo","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_RT04_show"},{"field":"Type","value":"View"}],"columns":[{"id":"column-227298","object_id":"column-227298","name":"personType","name_without_path":"personType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227299","object_id":"column-227299","name":"probateBeginTime","name_without_path":"probateBeginTime","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227300","object_id":"column-227300","name":"probateEndTime","name_without_path":"probateEndTime","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227301","object_id":"column-227301","name":"personTypeCode","name_without_path":"personTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227302","object_id":"column-227302","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227303","object_id":"column-227303","name":"cVerifier","name_without_path":"cVerifier","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227304","object_id":"column-227304","name":"dAbMakeDate","name_without_path":"dAbMakeDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227305","object_id":"column-227305","name":"dAbVerifyDate","name_without_path":"dAbVerifyDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227306","object_id":"column-227306","name":"dBirthDate","name_without_path":"dBirthDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227307","object_id":"column-227307","name":"dGraDate","name_without_path":"dGraDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227308","object_id":"column-227308","name":"dJoinJob","name_without_path":"dJoinJob","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227309","object_id":"column-227309","name":"dMakeDate","name_without_path":"dMakeDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227310","object_id":"column-227310","name":"dReceDate","name_without_path":"dReceDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227311","object_id":"column-227311","name":"dVerifyDate","name_without_path":"dVerifyDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227312","object_id":"column-227312","name":"eEmail","name_without_path":"eEmail","description":null,"is_pk":false,"is_identity":false,"data_type":"UFemail: nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227313","object_id":"column-227313","name":"hrts","name_without_path":"hrts","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227314","object_id":"column-227314","name":"iRecordID","name_without_path":"iRecordID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227315","object_id":"column-227315","name":"nDesiredSalary","name_without_path":"nDesiredSalary","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227316","object_id":"column-227316","name":"PK_hr_rt_abilitypsn","name_without_path":"PK_hr_rt_abilitypsn","description":null,"is_pk":false,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227317","object_id":"column-227317","name":"PK_hr_rt_register","name_without_path":"PK_hr_rt_register","description":null,"is_pk":false,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227318","object_id":"column-227318","name":"bHaveRela","name_without_path":"bHaveRela","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227319","object_id":"column-227319","name":"bIsReport","name_without_path":"bIsReport","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227320","object_id":"column-227320","name":"bLastFlag","name_without_path":"bLastFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227321","object_id":"column-227321","name":"blinkplan","name_without_path":"blinkplan","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227322","object_id":"column-227322","name":"cAbBillNo","name_without_path":"cAbBillNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227323","object_id":"column-227323","name":"cAbBusinessId","name_without_path":"cAbBusinessId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227324","object_id":"column-227324","name":"cAbInvalider","name_without_path":"cAbInvalider","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227325","object_id":"column-227325","name":"cAbMaker","name_without_path":"cAbMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227326","object_id":"column-227326","name":"cAbVerifier","name_without_path":"cAbVerifier","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227327","object_id":"column-227327","name":"cBillNo","name_without_path":"cBillNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227328","object_id":"column-227328","name":"cBusinessId","name_without_path":"cBusinessId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227329","object_id":"column-227329","name":"cInvalider","name_without_path":"cInvalider","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227330","object_id":"column-227330","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227331","object_id":"column-227331","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227332","object_id":"column-227332","name":"vAbVerifyNote","name_without_path":"vAbVerifyNote","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227333","object_id":"column-227333","name":"vContactAddr","name_without_path":"vContactAddr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227334","object_id":"column-227334","name":"vExpeDate","name_without_path":"vExpeDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227335","object_id":"column-227335","name":"vIDCardNo","name_without_path":"vIDCardNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227336","object_id":"column-227336","name":"vMemo","name_without_path":"vMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227337","object_id":"column-227337","name":"vMobile","name_without_path":"vMobile","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227338","object_id":"column-227338","name":"vName","name_without_path":"vName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227339","object_id":"column-227339","name":"vPhone","name_without_path":"vPhone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227340","object_id":"column-227340","name":"vPostCode","name_without_path":"vPostCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227341","object_id":"column-227341","name":"vRelaDispose","name_without_path":"vRelaDispose","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227342","object_id":"column-227342","name":"vRelaName","name_without_path":"vRelaName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227343","object_id":"column-227343","name":"vSchool","name_without_path":"vSchool","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227344","object_id":"column-227344","name":"vSelfAssessment","name_without_path":"vSelfAssessment","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227345","object_id":"column-227345","name":"vSourceType","name_without_path":"vSourceType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227346","object_id":"column-227346","name":"vStatus","name_without_path":"vStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227347","object_id":"column-227347","name":"vVerifyNote","name_without_path":"vVerifyNote","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227348","object_id":"column-227348","name":"cDeptCode","name_without_path":"cDeptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227349","object_id":"column-227349","name":"cDeptCodeCode","name_without_path":"cDeptCodeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227350","object_id":"column-227350","name":"rSex","name_without_path":"rSex","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227351","object_id":"column-227351","name":"rMaxEdu","name_without_path":"rMaxEdu","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227352","object_id":"column-227352","name":"vSpecialty","name_without_path":"vSpecialty","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227353","object_id":"column-227353","name":"rNation","name_without_path":"rNation","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227354","object_id":"column-227354","name":"rNativePlace","name_without_path":"rNativePlace","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227355","object_id":"column-227355","name":"rHouseRegister","name_without_path":"rHouseRegister","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227356","object_id":"column-227356","name":"rWedlock","name_without_path":"rWedlock","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227357","object_id":"column-227357","name":"rAbilityPsnType","name_without_path":"rAbilityPsnType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227358","object_id":"column-227358","name":"cJobCode","name_without_path":"cJobCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227359","object_id":"column-227359","name":"rChanCode","name_without_path":"rChanCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227360","object_id":"column-227360","name":"cPlanCode","name_without_path":"cPlanCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};