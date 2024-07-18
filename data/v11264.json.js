window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11264","name":"hr_v_BusUAPQuery","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[hr_v_BusUAPQuery]\r\nAS\r\n    SELECT  HR_HI_PERSON.jobnumber ,\r\n            HR_HI_PERSON.bProbation AS bProbation ,\r\n            HR_HI_PERSON.bPsnPerson AS bPsnPerson ,\r\n            hr_hi_Person.cPsn_Num ,\r\n            CONVERT(nchar(10), hr_hi_Person.dJoinworkDate, 121) dJoinworkDate ,\r\n            CONVERT(nchar(10), hr_hi_probation.dEnddate, 121) dEnddate ,\r\n            CONVERT(nchar(10), hr_hi_probation.dbegindate, 121) dbegindate ,\r\n            CONVERT(nchar(10), hr_hi_Person.dEnterDate, 121) dEnterDate ,\r\n            CONVERT(nchar(10), HR_HI_PERSON.dEnterUnitDate, 121) dEnterUnitDate ,\r\n            CONVERT(nchar(10), hr_hi_Person.dRegularDate, 121) dRegularDate ,\r\n            CONVERT(nchar(10), HR_HI_PERSON.dLeaveDate, 121) dLeaveDate ,\r\n            department2.cDepName AS cDept_Name ,\r\n            department2.CDepCode AS cdept_num ,\r\n            HR_CT0004.ccodeID AS rPersonType ,   \r\n            HR_CT0015.ccodeID AS rSex ,\r\n            HR_CT05913.ccodeID AS rCheckInFlag ,\r\n            HR_CT15714.ccodeID AS rFigure ,\r\n            HR_CT15815.ccodeID AS rWorkStatus ,\r\n            HR_CT80316.ccodeID AS EmploymentForm ,\r\n            hr_om_duty17.cDutycode AS cDutycode ,\r\n            hr_om_job18.cJobcode AS cjobcode ,\r\n            hr_tm_DutyClass19.cCode AS cdutyclass\r\n    FROM    hr_hi_Person\r\n            LEFT JOIN person ON hr_hi_Person.cPsn_Num = person.cpersoncode\r\n            LEFT JOIN hr_hi_jobinfo ON hr_hi_jobinfo.cpsn_num = hr_hi_person.cpsn_num\r\n                                       AND blastflag = 1\r\n                                       AND bpartjob = 0\r\n            LEFT JOIN department AS department2 ON hr_hi_Person.cdept_num = department2.CDepCode\r\n            LEFT JOIN HR_CT000 AS HR_CT0004 ON hr_hi_Person.rPersonType = HR_CT0004.ccodeid\r\n            LEFT JOIN HR_CT001 AS HR_CT0015 ON hr_hi_Person.rSex = HR_CT0015.ccodeid\r\n            LEFT JOIN HR_CT059 AS HR_CT05913 ON hr_hi_Person.rCheckInFlag = HR_CT05913.ccodeid\r\n            LEFT JOIN HR_CT157 AS HR_CT15714 ON HR_HI_PERSON.rFigure = HR_CT15714.cCodeID\r\n            LEFT JOIN HR_CT158 AS HR_CT15815 ON HR_HI_PERSON.rWorkStatus = HR_CT15815.cCodeID\r\n            LEFT JOIN HR_CT803 AS HR_CT80316 ON HR_HI_PERSON.EmploymentForm = HR_CT80316.cCodeID\r\n            LEFT JOIN hr_om_duty AS hr_om_duty17 ON hr_hi_jobinfo.cDutycode = hr_om_duty17.Cdutycode\r\n            LEFT JOIN hr_om_job AS hr_om_job18 ON hr_hi_jobinfo.cjobcode = hr_om_job18.cJobcode\r\n            LEFT JOIN hr_tm_DutyClass AS hr_tm_DutyClass19 ON hr_hi_person.cdutyclass = hr_tm_DutyClass19.cCode\r\n            LEFT JOIN hr_hi_probation ON hr_hi_Person.cPsn_Num = hr_hi_probation.cPsn_Num\r\n                                         AND hr_hi_probation.blastflag = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_BusUAPQuery"},{"field":"Type","value":"View"}],"columns":[{"id":"column-224139","object_id":"column-224139","name":"jobnumber","name_without_path":"jobnumber","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224140","object_id":"column-224140","name":"bProbation","name_without_path":"bProbation","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224141","object_id":"column-224141","name":"bPsnPerson","name_without_path":"bPsnPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224142","object_id":"column-224142","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224143","object_id":"column-224143","name":"dJoinworkDate","name_without_path":"dJoinworkDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224144","object_id":"column-224144","name":"dEnddate","name_without_path":"dEnddate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224145","object_id":"column-224145","name":"dbegindate","name_without_path":"dbegindate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224146","object_id":"column-224146","name":"dEnterDate","name_without_path":"dEnterDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224147","object_id":"column-224147","name":"dEnterUnitDate","name_without_path":"dEnterUnitDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224148","object_id":"column-224148","name":"dRegularDate","name_without_path":"dRegularDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224149","object_id":"column-224149","name":"dLeaveDate","name_without_path":"dLeaveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224150","object_id":"column-224150","name":"cDept_Name","name_without_path":"cDept_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224151","object_id":"column-224151","name":"cdept_num","name_without_path":"cdept_num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224152","object_id":"column-224152","name":"rPersonType","name_without_path":"rPersonType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224153","object_id":"column-224153","name":"rSex","name_without_path":"rSex","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224154","object_id":"column-224154","name":"rCheckInFlag","name_without_path":"rCheckInFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224155","object_id":"column-224155","name":"rFigure","name_without_path":"rFigure","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224156","object_id":"column-224156","name":"rWorkStatus","name_without_path":"rWorkStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224157","object_id":"column-224157","name":"EmploymentForm","name_without_path":"EmploymentForm","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224158","object_id":"column-224158","name":"cDutycode","name_without_path":"cDutycode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"28","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224159","object_id":"column-224159","name":"cjobcode","name_without_path":"cjobcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224160","object_id":"column-224160","name":"cdutyclass","name_without_path":"cdutyclass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};