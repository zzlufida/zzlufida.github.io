window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13917","name":"v_sfc_workhrnote_detail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_sfc_workhrnote_detail\r\nAs\r\n\r\nselect s.WorkHrId as WorkHrId,s.SortSeq as DSortSeq,smd.OpSeq as DOpSeq,smd.Description as DDescription,s.WorkHrSumId as WorkHrSumId,s.MoRoutingDId as DMoRoutingDId,wc.WcCode as DWcCode,wc.description as DWcDescription,s.Ufts as DDUfts,smd.SubFlag as DSubFlag,smd.SVendorCode as DSVendorCode,v.cVenName  as DVenName,smd.WcId as DWcId\r\n,s.AuxUnitCode as DOpUnitCode,coalesce(sc.cComUnitName,'') as DOpUnitName,s.ChangeRate as DChangeRate,CASE WHEN s.changerate IS NULL THEN NULL else md.qty/isnull(s.changerate,1) end as DAuxMoQty,md.qty - (select sum(ss.QualifiedQty*coalesce(ss.ChangeRate,1)) from sfc_workhrnotesum ss where ss.MoRoutingDId = s.MoRoutingDId) as DUnCompletedQty,CASE WHEN s.changerate IS NULL THEN NULL else (md.qty - (select sum(ss.QualifiedQty*coalesce(ss.ChangeRate,1)) from sfc_workhrnotesum ss where ss.MoRoutingDId = s.MoRoutingDId))/isnull(s.changerate,1) end as DAuxUnCompletedQty\r\n,s.QualifiedQty as DQualifiedQty,s.RefusedQty as DRefusedQty,s.ScrapQty as DScrapQty,s.PerWorkHr as DPerWorkHr,s.PWorkHr as DPWorkHr,s.WorkHr as DWorkHr,(select sum(ss.QualifiedQty*coalesce(ss.ChangeRate,1)) from sfc_workhrnotesum ss where ss.MoRoutingDId = s.MoRoutingDId) as DCompletedQty,(s.QualifiedQty + s.RefusedQty + s.ScrapQty) as DFinishingQty,s.Remark as DRemark\r\n,s.Define22 as DDefine_22,s.Define23 as DDefine_23,s.Define24 as DDefine_24,s.Define25 as DDefine_25,s.Define26 as DDefine_26,s.Define27 as DDefine_27,s.Define28 as DDefine_28,s.Define29 as DDefine_29,s.Define30 as DDefine_30,s.Define31 as DDefine_31,s.Define32 as DDefine_32,s.Define33 as DDefine_33,s.Define34 as DDefine_34,s.Define35 as DDefine_35,s.Define36 as DDefine_36,s.Define37 as DDefine_37\r\n,'0' as DIsWs,'1' as DRowIsEmptySign\r\nfrom sfc_workhrnotesum s inner join sfc_moroutingdetail smd on smd.moroutingdid = s.moroutingdid inner join sfc_workcenter wc on smd.wcid = wc.wcid left outer join Vendor v on smd.SVendorCode= v.cVenCode \r\ninner join sfc_workhrnote w on w.WorkHrId = s.WorkHrId inner join mom_orderdetail md on w.modid = md.modid\r\nleft outer join ComputationUnit sc on sc.cComunitCode = s.AuxUnitCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_sfc_workhrnote_detail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-406685","object_id":"column-406685","name":"WorkHrId","name_without_path":"WorkHrId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406686","object_id":"column-406686","name":"DSortSeq","name_without_path":"DSortSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406687","object_id":"column-406687","name":"DOpSeq","name_without_path":"DOpSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406688","object_id":"column-406688","name":"DDescription","name_without_path":"DDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406689","object_id":"column-406689","name":"WorkHrSumId","name_without_path":"WorkHrSumId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406690","object_id":"column-406690","name":"DMoRoutingDId","name_without_path":"DMoRoutingDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406691","object_id":"column-406691","name":"DWcCode","name_without_path":"DWcCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406692","object_id":"column-406692","name":"DWcDescription","name_without_path":"DWcDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406693","object_id":"column-406693","name":"DDUfts","name_without_path":"DDUfts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406694","object_id":"column-406694","name":"DSubFlag","name_without_path":"DSubFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406695","object_id":"column-406695","name":"DSVendorCode","name_without_path":"DSVendorCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406696","object_id":"column-406696","name":"DVenName","name_without_path":"DVenName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406697","object_id":"column-406697","name":"DWcId","name_without_path":"DWcId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406698","object_id":"column-406698","name":"DOpUnitCode","name_without_path":"DOpUnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406699","object_id":"column-406699","name":"DOpUnitName","name_without_path":"DOpUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406700","object_id":"column-406700","name":"DChangeRate","name_without_path":"DChangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_ChangeRate: decimal","data_length":"22, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406701","object_id":"column-406701","name":"DAuxMoQty","name_without_path":"DAuxMoQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406702","object_id":"column-406702","name":"DUnCompletedQty","name_without_path":"DUnCompletedQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406703","object_id":"column-406703","name":"DAuxUnCompletedQty","name_without_path":"DAuxUnCompletedQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406704","object_id":"column-406704","name":"DQualifiedQty","name_without_path":"DQualifiedQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406705","object_id":"column-406705","name":"DRefusedQty","name_without_path":"DRefusedQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406706","object_id":"column-406706","name":"DScrapQty","name_without_path":"DScrapQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406707","object_id":"column-406707","name":"DPerWorkHr","name_without_path":"DPerWorkHr","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_WkHr: decimal","data_length":"22, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406708","object_id":"column-406708","name":"DPWorkHr","name_without_path":"DPWorkHr","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_WkHr: decimal","data_length":"22, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406709","object_id":"column-406709","name":"DWorkHr","name_without_path":"DWorkHr","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_WkHr: decimal","data_length":"22, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406710","object_id":"column-406710","name":"DCompletedQty","name_without_path":"DCompletedQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406711","object_id":"column-406711","name":"DFinishingQty","name_without_path":"DFinishingQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406712","object_id":"column-406712","name":"DRemark","name_without_path":"DRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406713","object_id":"column-406713","name":"DDefine_22","name_without_path":"DDefine_22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406714","object_id":"column-406714","name":"DDefine_23","name_without_path":"DDefine_23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406715","object_id":"column-406715","name":"DDefine_24","name_without_path":"DDefine_24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406716","object_id":"column-406716","name":"DDefine_25","name_without_path":"DDefine_25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406717","object_id":"column-406717","name":"DDefine_26","name_without_path":"DDefine_26","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406718","object_id":"column-406718","name":"DDefine_27","name_without_path":"DDefine_27","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406719","object_id":"column-406719","name":"DDefine_28","name_without_path":"DDefine_28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406720","object_id":"column-406720","name":"DDefine_29","name_without_path":"DDefine_29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406721","object_id":"column-406721","name":"DDefine_30","name_without_path":"DDefine_30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406722","object_id":"column-406722","name":"DDefine_31","name_without_path":"DDefine_31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406723","object_id":"column-406723","name":"DDefine_32","name_without_path":"DDefine_32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406724","object_id":"column-406724","name":"DDefine_33","name_without_path":"DDefine_33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406725","object_id":"column-406725","name":"DDefine_34","name_without_path":"DDefine_34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406726","object_id":"column-406726","name":"DDefine_35","name_without_path":"DDefine_35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406727","object_id":"column-406727","name":"DDefine_36","name_without_path":"DDefine_36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406728","object_id":"column-406728","name":"DDefine_37","name_without_path":"DDefine_37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406729","object_id":"column-406729","name":"DIsWs","name_without_path":"DIsWs","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406730","object_id":"column-406730","name":"DRowIsEmptySign","name_without_path":"DRowIsEmptySign","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};