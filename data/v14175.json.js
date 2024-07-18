window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14175","name":"vs_CJTM_LLB","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view vs_CJTM_LLB\r\nas\r\nselect r.*,rm.MoCode ,rm.MoSeq ,rm.InvCode as pInvCode,i.cInvName as pInvName,mrd.OpSeq ,mrd.Description as OpDesc,\r\n\t\tp.cPsn_Name  ,\r\n\t\trs1.cReasonName as ReasonName ,\r\n\t\trs2.cReasonName as QualifiedReasonName ,\r\n\t\trs3.cReasonName as ScrapReasonName ,\r\n\t\trs4.cReasonName as refusedreasonName  \r\nfrom \r\n\t\t(---材料占用情况\r\n\t\tselect '材料占用' as itype,moc.cInvSn as cSnCode,moc.ccode,r.dOperTime as date,\r\n\t\t\t\tmoc.InvCode,i.cInvName,i.cInvAddCode,moc.cbatch,\r\n\t\t\t\tmoc.occupyQty as qty,r.cPsn_Num ,'' as cEQCode,'' as cEQName,\r\n\t\t\t\t(case when r.declareqty>0 then '检验' \r\n\t\t\t\telse (case when r.QualifiedQty >0 then '合格' \r\n\t\t\t\t\telse case when r.ScrapQty >0 then '报废'\r\n\t\t\t\t\t\telse '拒收' end\r\n\t\t\t\t\tend)\r\n\t\t\t\tend) as rState,'' as CheckProjectCode,'' as CheckProjectItem ,'' as CheckProjectValue,\r\n\t\t\t\tr.ReasonCode,r.QualifiedReasoncode ,r.ScrapReasonCode ,r.refusedreasoncode ,\r\n\t\t\t\tr.OperationId as MoRoutingDID\r\n\t\tfrom CJTM_ZJYL_occupyRes MOC inner join inventory i on i.cInvCode =moc.InvCode\r\n\t\t\tleft outer join HY_TM_WorkHrRecord r on r.ID =moc.RID \r\n\r\n\t\tunion all\r\n\t\t---工序报工\r\n\t\tselect '工序报工' as itype,r.cSnCode ,'' as ccode,dOperTime,\r\n\t\t\t\t'' as InvCode,'' as cInvName,'' as cInvAddCode,'' as cbatch,\r\n\t\t\t\tr.QualifiedQty +r.ScrapQty+r.RefusedQty+r.declareqty as Qty,r.cPsn_Num ,r.ResCode as cEQCode,eq.cEQName,\r\n\t\t\t\t(case when r.declareqty>0 then '检验' \r\n\t\t\t\telse (case when r.QualifiedQty >0 then '合格' \r\n\t\t\t\t\telse case when r.ScrapQty >0 then '报废'\r\n\t\t\t\t\t\telse '拒收' end\r\n\t\t\t\t\tend)\r\n\t\t\t\tend) as rState,'' as CheckProjectCode,'' as CheckProjectItem ,'' as CheckProjectValue,\r\n\t\t\t\tr.ReasonCode,r.QualifiedReasoncode ,r.ScrapReasonCode ,r.refusedreasoncode ,\r\n\t\t\t\tr.OperationId\r\n\t\tfrom HY_TM_WorkHrRecord r inner join sfc_moroutingdetail mrd on mrd.MoRoutingDId =r.OperationId \r\n\t\t\tleft outer join hr_hi_person p on p.cPsn_Num =r.cPsn_Num \r\n\t\t\tleft outer join EQ_EQData eq on eq.cEQCode=r.ResCode\r\n\r\n\t\tunion all\r\n\t\t---工序检验\r\n\t\tselect '检验' as itype, c.cSnCode,'' as ccode ,c.checkTime ,\r\n\t\t\t'' as InvCode,'' as cInvName,'' as cInvAddCode,'' as cbatch,\r\n\t\t\t0 as Qty,c.checkPerson as cPsn_Num ,'' as cEQCode,'' as cEQName,\r\n\t\t\t'' as rState ,c.CheckProjectCode,c.CheckProjectItem ,c.CheckProjectValue,\r\n\t\t\t'' as ReasonCode,'' as QualifiedReasoncode ,'' as ScrapReasonCode ,'' as refusedreasoncode,\r\n\t\t\tc.MoRoutingDID \r\n\t\tfrom CJTM_ZJYL_CheckProject c left outer join sfc_moroutingdetail mrd on mrd.MoRoutingDId =c.MoRoutingDID \r\n\t\t) r left outer join CJTM_ZJYL_relationMo rm on r.cSnCode =rm.cInvSn \r\n\t\tleft outer join inventory i on i.cInvCode =rm.InvCode \r\n\t\tleft outer join sfc_moroutingdetail mrd on mrd.MoRoutingDId =r.MoRoutingDID \r\n\t\tleft outer join hr_hi_person p on p.cPsn_Num =r.cPsn_Num \r\n\t\tleft outer join Reason rs1 on rs1.cReasonCode =r.ReasonCode \r\n\t\tleft outer join Reason rs2 on rs2.cReasonCode =r.QualifiedReasoncode \r\n\t\tleft outer join Reason rs3 on rs3.cReasonCode =r.ScrapReasonCode \r\n\t\tleft outer join Reason rs4 on rs4.cReasonCode =r.refusedreasoncode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vs_CJTM_LLB"},{"field":"Type","value":"View"}],"columns":[{"id":"column-419234","object_id":"column-419234","name":"itype","name_without_path":"itype","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419235","object_id":"column-419235","name":"cSnCode","name_without_path":"cSnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419236","object_id":"column-419236","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419237","object_id":"column-419237","name":"date","name_without_path":"date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419238","object_id":"column-419238","name":"InvCode","name_without_path":"InvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419239","object_id":"column-419239","name":"cInvName","name_without_path":"cInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419240","object_id":"column-419240","name":"cInvAddCode","name_without_path":"cInvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419241","object_id":"column-419241","name":"cbatch","name_without_path":"cbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419242","object_id":"column-419242","name":"qty","name_without_path":"qty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"25, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419243","object_id":"column-419243","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419244","object_id":"column-419244","name":"cEQCode","name_without_path":"cEQCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419245","object_id":"column-419245","name":"cEQName","name_without_path":"cEQName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419246","object_id":"column-419246","name":"rState","name_without_path":"rState","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419247","object_id":"column-419247","name":"CheckProjectCode","name_without_path":"CheckProjectCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419248","object_id":"column-419248","name":"CheckProjectItem","name_without_path":"CheckProjectItem","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419249","object_id":"column-419249","name":"CheckProjectValue","name_without_path":"CheckProjectValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"70","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419250","object_id":"column-419250","name":"ReasonCode","name_without_path":"ReasonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419251","object_id":"column-419251","name":"QualifiedReasoncode","name_without_path":"QualifiedReasoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419252","object_id":"column-419252","name":"ScrapReasonCode","name_without_path":"ScrapReasonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419253","object_id":"column-419253","name":"refusedreasoncode","name_without_path":"refusedreasoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419254","object_id":"column-419254","name":"MoRoutingDID","name_without_path":"MoRoutingDID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419255","object_id":"column-419255","name":"MoCode","name_without_path":"MoCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419256","object_id":"column-419256","name":"MoSeq","name_without_path":"MoSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419257","object_id":"column-419257","name":"pInvCode","name_without_path":"pInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419258","object_id":"column-419258","name":"pInvName","name_without_path":"pInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419259","object_id":"column-419259","name":"OpSeq","name_without_path":"OpSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419260","object_id":"column-419260","name":"OpDesc","name_without_path":"OpDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419261","object_id":"column-419261","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419262","object_id":"column-419262","name":"ReasonName","name_without_path":"ReasonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419263","object_id":"column-419263","name":"QualifiedReasonName","name_without_path":"QualifiedReasonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419264","object_id":"column-419264","name":"ScrapReasonName","name_without_path":"ScrapReasonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419265","object_id":"column-419265","name":"refusedreasonName","name_without_path":"refusedreasonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};