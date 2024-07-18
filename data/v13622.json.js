window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13622","name":"v_mom_docparameter","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_mom_docparameter\r\n       (BusFlowId,--流ID\r\n        BusFlowDesc,--流程说明\r\n        MoClass, --生产订单类型\r\n        motypeid, --生产订单类别\r\n        bOverMPOut, --允许超生产订单领料\r\n        bOverMPIn,  --允许超生产订单入库\r\n        iMOProInCtrlBySet,--1：允许未领料的生产订单入库  2：按领料比例控制成品入库\r\n        bRequisiteLoss, --生产领料是否考虑生产损耗率\r\n        bomnastatus,bomopstatus,bomclstatus, --允许bom的三个状态\r\n        proutingnastatus,proutingopstatus,proutingclstatus,--允许工艺路线的三个状态\r\n        EBomFlag,EProutingFlag, --工程bom,工程工艺路线\r\n        OverInFlag, --工序转移超量完工控制\r\n        OpReportFlag, --工序转移跨报告点控制\r\n        OpIssFlag,  --工序转移领料控制\r\n        bWorkshopTrans, --必转车间\r\n        OrderManual,--手工输入\r\n        bOrderPlan,--生产计划\r\n        bOrderNonProducts,--不良品处理单\r\n        bServiceflag, --服务单\r\n        bOrderFlag, --销售订单\r\n        bExorderFlag, --出口订单\r\n        bMMOpeningProcess, --启用流程\r\n        cOrderInspection,--产品报检控制方式\r\n\tcRuleInspection, --产品报检控制规则\r\n\tRequisitionFlag, --领料申请标识\r\n        RunCardFlag, --启用流转卡\r\n\tAlloVTid,--子件模板\r\n\tbControledByMOQty,\r\n\tbControledByRoutingQty,\r\n\tbControledByMoIssQty\r\n       )\r\nas                                                                         \r\nselect p.iFlowID,\r\n       p.cMMProcessDescribes,\r\n       p.eMMOrderType,\r\n       m.MoTypeId,\r\n       case when p.bRequisiteOverOrder = 1 then 'True' else 'False' end,\r\n       case when p.bStorageOverOrder = 1 then 'True' else 'False' end,\r\n       case when p.bStorageUnlicensed = 1 then 1 when p.bStorageProportion = 1 then 2 else 0 end, --与原先栏位值匹配\r\n       p.bRequisiteLoss,\r\n       p.bOrderMNew,\r\n       p.bOrderMAudit,\r\n       p.bOrderMDisable,\r\n       p.bOrderTNew,\r\n       p.bOrderTAudit,\r\n       p.bOrderTDisable,\r\n       p.bOrderMProject,\r\n       p.bOrderTProject,\r\n       p.bWorkshopOver,\r\n       p.bWorkshopReport,\r\n       p.bWorkshopMaterial,\r\n       p.bWorkshopTrans,\r\n       p.bOrderManual,\r\n       p.bOrderPlan,\r\n       p.bOrderNonProducts,\r\n       p.bOrderServiceDoc,\r\n       p.bOrderSales,\r\n       p.bOrderExport,\r\n       p.bMMOpeningProcess,\r\n       p.cOrderInspection,\r\n       p.cRuleInspection,\r\n       RequisitionFlag,\r\n       bEnableTransferCard,\r\n       CONVERT(int,cMOTemplate),\r\n\t\tp.bControledByMOQty,\r\n\t\tp.bControledByRoutingQty,\r\n\t\tp.bControledByMoIssQty\t   \r\n  from MMBizFlow p,mom_motype m\r\n where p.cMMOrderCategory = m.MoTypeCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_mom_docparameter"},{"field":"Type","value":"View"}],"columns":[{"id":"column-390586","object_id":"column-390586","name":"BusFlowId","name_without_path":"BusFlowId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390587","object_id":"column-390587","name":"BusFlowDesc","name_without_path":"BusFlowDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390588","object_id":"column-390588","name":"MoClass","name_without_path":"MoClass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390589","object_id":"column-390589","name":"motypeid","name_without_path":"motypeid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390590","object_id":"column-390590","name":"bOverMPOut","name_without_path":"bOverMPOut","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390591","object_id":"column-390591","name":"bOverMPIn","name_without_path":"bOverMPIn","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390592","object_id":"column-390592","name":"iMOProInCtrlBySet","name_without_path":"iMOProInCtrlBySet","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390593","object_id":"column-390593","name":"bRequisiteLoss","name_without_path":"bRequisiteLoss","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390594","object_id":"column-390594","name":"bomnastatus","name_without_path":"bomnastatus","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390595","object_id":"column-390595","name":"bomopstatus","name_without_path":"bomopstatus","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390596","object_id":"column-390596","name":"bomclstatus","name_without_path":"bomclstatus","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390597","object_id":"column-390597","name":"proutingnastatus","name_without_path":"proutingnastatus","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390598","object_id":"column-390598","name":"proutingopstatus","name_without_path":"proutingopstatus","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390599","object_id":"column-390599","name":"proutingclstatus","name_without_path":"proutingclstatus","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390600","object_id":"column-390600","name":"EBomFlag","name_without_path":"EBomFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390601","object_id":"column-390601","name":"EProutingFlag","name_without_path":"EProutingFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390602","object_id":"column-390602","name":"OverInFlag","name_without_path":"OverInFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390603","object_id":"column-390603","name":"OpReportFlag","name_without_path":"OpReportFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390604","object_id":"column-390604","name":"OpIssFlag","name_without_path":"OpIssFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390605","object_id":"column-390605","name":"bWorkshopTrans","name_without_path":"bWorkshopTrans","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390606","object_id":"column-390606","name":"OrderManual","name_without_path":"OrderManual","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390607","object_id":"column-390607","name":"bOrderPlan","name_without_path":"bOrderPlan","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390608","object_id":"column-390608","name":"bOrderNonProducts","name_without_path":"bOrderNonProducts","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390609","object_id":"column-390609","name":"bServiceflag","name_without_path":"bServiceflag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390610","object_id":"column-390610","name":"bOrderFlag","name_without_path":"bOrderFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390611","object_id":"column-390611","name":"bExorderFlag","name_without_path":"bExorderFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390612","object_id":"column-390612","name":"bMMOpeningProcess","name_without_path":"bMMOpeningProcess","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390613","object_id":"column-390613","name":"cOrderInspection","name_without_path":"cOrderInspection","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390614","object_id":"column-390614","name":"cRuleInspection","name_without_path":"cRuleInspection","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390615","object_id":"column-390615","name":"RequisitionFlag","name_without_path":"RequisitionFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390616","object_id":"column-390616","name":"RunCardFlag","name_without_path":"RunCardFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390617","object_id":"column-390617","name":"AlloVTid","name_without_path":"AlloVTid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390618","object_id":"column-390618","name":"bControledByMOQty","name_without_path":"bControledByMOQty","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390619","object_id":"column-390619","name":"bControledByRoutingQty","name_without_path":"bControledByRoutingQty","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390620","object_id":"column-390620","name":"bControledByMoIssQty","name_without_path":"bControledByMoIssQty","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};