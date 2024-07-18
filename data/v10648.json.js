window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10648","name":"EQ_VGetWorkEnd","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View EQ_VGetWorkEnd\r\nAS\r\n\t/*\r\n\t求出社会日历时最后到期作业日\r\n\t*/\r\n\tselect case when isnull(dtLastTime,'') <>'' then \r\n\t\t(\r\n\t\t\tcase cDtCom when 1 then dateadd(day,intTime,dtLastTime) \r\n\t\t\t\twhen 2 then dateadd(week,intTime,dtLastTime)\r\n\t\t\t\twhen 3 then dateadd(month,intTime,dtLastTime)\r\n\t\t\t\twhen 4 then dateadd(year,intTime,dtLastTime)\r\n\t\t\t\telse null\r\n\t\t\tend\r\n\t\t)else null end as dtWorkEnd,\r\n\t\tAutoID,cWorkTypeCode,cWorkConCode,intDate,cWorkCode\r\n\tfrom EQ_VWorkContentRemind \r\n\twhere intDate<>2\r\n\tunion all \r\n\t/*\r\n\t求出工厂日历时最后到期作业日(工作日内的)\r\n\t*/\r\n\tselect dtLastTime as dtWorkEnd,AutoID,cWorkTypeCode,cWorkConCode,intDate,cWorkCode\r\n\tfrom EQ_VNotWorkDay \r\n\twhere WkHours<>0\r\n\tunion all \r\n\t/*\r\n\t求出工厂日历时最后到期作业日(非工作日内的)\r\n\t*/\r\n\tselect case when isnull(calDetail.CalDate,'')='' then tempLastSeq.dtLastTime \r\n\t\t\telse calDetail.CalDate end as dtWorkEnd,\r\n\t\ttempLastSeq.AutoID,tempLastSeq.cWorkTypeCode,tempLastSeq.cWorkConCode,tempLastSeq.intDate,tempLastSeq.cWorkCode\r\n\tfrom \r\n\t(\r\n\t\t/*\r\n\t\t求出工作日历时周末的最近的下一个工作日的intLastSeq,以来求出其最后到期作业日期\r\n\t\t*/\r\n\t\tselect VWork.AutoID,calDetail.CalDate as dtLastTime,VWork.intTime,\r\n\t\t\t(calDetail.seq+intTime) as intLastSeq,\r\n\t\t\tcalDetail.CalendarDId,calDetail.calendarid,\r\n\t\t\tcal.CalendarCode,calDetail.CalDate,calDetail.WkHours,\r\n\t\t\tVWork.cWorkTypeCode,VWork.cWorkConCode,VWork.intDate,VWork.cWorkCode\r\n\t\tfrom EQ_VNotWorkDay as VWork\r\n\t\tleft join bas_calendardetail as calDetail\r\n\t\t\ton VWork.dtLastTime=calDetail.CalDate \r\n\t\tleft join bas_calendar as cal\r\n\t\t\ton calDetail.calendarid=cal.calendarid and cal.calendarCode='system'\r\n\t\twhere VWork.WkHours=0\r\n\t) as tempLastSeq\r\n\tleft join bas_calendardetail as calDetail\r\n\t\t\t\t\ton tempLastSeq.calendarid = calDetail.calendarid \r\n\t\t\t\t\t\tand tempLastSeq.intLastSeq=calDetail.seq\r\n\t\t\tleft join bas_calendar as cal\r\n\t\t\t\t\ton calDetail.calendarid=cal.calendarid \r\n\t\t\t\t\t\t--and tempLastSeq.CalendarCode = cal.CalendarCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EQ_VGetWorkEnd"},{"field":"Type","value":"View"}],"columns":[{"id":"column-199395","object_id":"column-199395","name":"dtWorkEnd","name_without_path":"dtWorkEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199396","object_id":"column-199396","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199397","object_id":"column-199397","name":"cWorkTypeCode","name_without_path":"cWorkTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199398","object_id":"column-199398","name":"cWorkConCode","name_without_path":"cWorkConCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199399","object_id":"column-199399","name":"intDate","name_without_path":"intDate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199400","object_id":"column-199400","name":"cWorkCode","name_without_path":"cWorkCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};