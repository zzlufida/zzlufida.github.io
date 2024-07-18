window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13364","name":"v_HY_FZ_MoroutingShift","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW v_HY_FZ_MoroutingShift\r\nAS\r\nSELECT sm.MoRoutingDId ,sm.define29 DDefine_29,\r\nsm.CompletedQty DCompletedQty,sm.Remark DPgRemark, sm.MoRoutingShiftId MoRoutingShiftId,sm.WorkShiftId WorkShiftId,convert(nchar,convert(money,sm.Ufts),2) Ufts,sm.EQId DEQId,\r\nsm.AuxQty DAuxQty,case when isnull(mr.ChangeRate,0)=0 THEN NULL ELSE sm.CompletedQty/mr.ChangeRate END DAuxCompletedQty,sm.Define30 DDefine_30,sm.Define31 DDefine_31,sm.Define32 DDefine_32,sm.Define33 DDefine_33,sm.Define34 DDefine_34,sm.Define35 DDefine_35,\r\nsm.Define36 DDefine_36,sm.Define37 DDefine_37,NULL DRowIsEmptySign,sm.SortSeq DSortSeq,sw.Code DCode,sw.[Description] DWsDescription,eq.cEQCode DEQCode,EQ.cEQName DMachineName,h.cgg DMachineStd,h.cxh DMachineType,sm.EmployCode DEmployCode,\r\np.cPsn_Name DEmployeeName,sm.Qty DQty,sm.Define22 DDefine_22,sm.Define23 DDefine_23,sm.Define24 DDefine_24,sm.Define25 DDefine_25,sm.Define26 DDefine_26,sm.Define27 DDefine_27,sm.Define28 DDefine_28\r\n,sm2.MoId,sm2.MoDId ,sm2.Qty\r\n FROM sfc_moroutingshift sm INNER JOIN sfc_moroutingdetail mr ON mr.MoRoutingDId=sm.MoRoutingDId \r\n LEFT JOIN sfc_morouting sm2 ON sm2.MoRoutingId=mr.MoRoutingId\r\n LEFT JOIN sfc_workshift sw with(nolock) ON sw.WorkShiftId=sm.WorkShiftId \r\n LEFT JOIN EQ_EQData eq with(nolock) ON eq.AutoID=sm.EQId \r\n LEFT JOIN EQ_EQType h with(nolock) ON h.cEQTypeCode=eq.cEQTypeCode\r\n LEFT JOIN hr_hi_person p WITH(NOLOCK) ON p.cPsn_Num=sm.EmployCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_HY_FZ_MoroutingShift"},{"field":"Type","value":"View"}],"columns":[{"id":"column-368857","object_id":"column-368857","name":"MoRoutingDId","name_without_path":"MoRoutingDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368858","object_id":"column-368858","name":"DDefine_29","name_without_path":"DDefine_29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368859","object_id":"column-368859","name":"DCompletedQty","name_without_path":"DCompletedQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368860","object_id":"column-368860","name":"DPgRemark","name_without_path":"DPgRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368861","object_id":"column-368861","name":"MoRoutingShiftId","name_without_path":"MoRoutingShiftId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368862","object_id":"column-368862","name":"WorkShiftId","name_without_path":"WorkShiftId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368863","object_id":"column-368863","name":"Ufts","name_without_path":"Ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368864","object_id":"column-368864","name":"DEQId","name_without_path":"DEQId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368865","object_id":"column-368865","name":"DAuxQty","name_without_path":"DAuxQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368866","object_id":"column-368866","name":"DAuxCompletedQty","name_without_path":"DAuxCompletedQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368867","object_id":"column-368867","name":"DDefine_30","name_without_path":"DDefine_30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368868","object_id":"column-368868","name":"DDefine_31","name_without_path":"DDefine_31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368869","object_id":"column-368869","name":"DDefine_32","name_without_path":"DDefine_32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368870","object_id":"column-368870","name":"DDefine_33","name_without_path":"DDefine_33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368871","object_id":"column-368871","name":"DDefine_34","name_without_path":"DDefine_34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368872","object_id":"column-368872","name":"DDefine_35","name_without_path":"DDefine_35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368873","object_id":"column-368873","name":"DDefine_36","name_without_path":"DDefine_36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368874","object_id":"column-368874","name":"DDefine_37","name_without_path":"DDefine_37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368875","object_id":"column-368875","name":"DRowIsEmptySign","name_without_path":"DRowIsEmptySign","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368876","object_id":"column-368876","name":"DSortSeq","name_without_path":"DSortSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368877","object_id":"column-368877","name":"DCode","name_without_path":"DCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368878","object_id":"column-368878","name":"DWsDescription","name_without_path":"DWsDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368879","object_id":"column-368879","name":"DEQCode","name_without_path":"DEQCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368880","object_id":"column-368880","name":"DMachineName","name_without_path":"DMachineName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368881","object_id":"column-368881","name":"DMachineStd","name_without_path":"DMachineStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368882","object_id":"column-368882","name":"DMachineType","name_without_path":"DMachineType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368883","object_id":"column-368883","name":"DEmployCode","name_without_path":"DEmployCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368884","object_id":"column-368884","name":"DEmployeeName","name_without_path":"DEmployeeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368885","object_id":"column-368885","name":"DQty","name_without_path":"DQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368886","object_id":"column-368886","name":"DDefine_22","name_without_path":"DDefine_22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368887","object_id":"column-368887","name":"DDefine_23","name_without_path":"DDefine_23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368888","object_id":"column-368888","name":"DDefine_24","name_without_path":"DDefine_24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368889","object_id":"column-368889","name":"DDefine_25","name_without_path":"DDefine_25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368890","object_id":"column-368890","name":"DDefine_26","name_without_path":"DDefine_26","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368891","object_id":"column-368891","name":"DDefine_27","name_without_path":"DDefine_27","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368892","object_id":"column-368892","name":"DDefine_28","name_without_path":"DDefine_28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368893","object_id":"column-368893","name":"MoId","name_without_path":"MoId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368894","object_id":"column-368894","name":"MoDId","name_without_path":"MoDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-368895","object_id":"column-368895","name":"Qty","name_without_path":"Qty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};