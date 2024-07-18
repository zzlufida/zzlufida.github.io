window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12789","name":"V_CurrentStock_PE_SUM","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW V_CurrentStock_PE_SUM \r\nAS  \r\n select C.cWhCode,C.cInvCode,C.cFree1,C.cFree2,C.cFree3,C.cFree4,C.cFree5,C.cFree6,C.cFree7,C.cFree8,C.cFree9,C.cFree10,\r\n\tC.cBatch,C.bStopFlag,C.BGSPSTOP,C.dLastCheckDate,C.cCheckState,C.dLastYearCheckDate,C.cvmivencode,\r\n\tmax(C.cMassUnit) as cMassUnit,max(C.iMassDate) as iMassDate,max(C.dVDate) as dVDate,max(C.dMdate) as dMdate,\r\n\tc.cexpirationdate,max(C.dexpirationdate) as dexpirationdate,max(C.iexpiratdatecalcu) as iexpiratdatecalcu,\r\n       (case when isnull(I.cSRPolicy,'')='LP' and isnull(i.bspecialorder,0)=1 then C.iSoType else 0 end) as iSoType,  \r\n       (case when isnull(I.cSRPolicy,'')='LP' and isnull(i.bspecialorder,0)=1 then C.iSodid else '' end) as iSodid,\r\n \tsum(C.iQuantity+isnull(c.ipeqty,0)) as iQuantity,sum(C.iNum+isnull(ipenum,0)) as iNum,sum(C.fOutQuantity) as fOutQuantity,sum(C.fOutNum) as fOutNum,\r\n\tsum(C.fInQuantity) as fInQuantity,sum(C.fInNum) as fInNum,sum(C.fTransInQuantity) as fTransInQuantity,\r\n\tsum(C.fTransInNum) as fTransInNum,sum(C.fTransOutQuantity) as fTransOutQuantity,sum(C.fTransOutNum) as fTransOutNum,\r\n\tsum(C.fPlanQuantity) as fPlanQuantity,sum(C.fPlanNum) as fPlanNum,sum(C.fDisableQuantity) as fDisableQuantity,\r\n\tsum(C.fDisableNum) as fDisableNum,sum(C.fAvaQuantity) as fAvaQuantity,sum(C.fAvaNum) as fAvaNum,\r\n\tsum(C.fStopQuantity) as fStopQuantity,sum(C.fStopNum) as fStopNum,\r\n        AB.cbatchproperty1,AB.cbatchproperty2,AB.cbatchproperty3,AB.cbatchproperty4,AB.cbatchproperty5,\r\n        AB.cbatchproperty6,AB.cbatchproperty7,AB.cbatchproperty8,AB.cbatchproperty9,AB.cbatchproperty10   \r\n From currentstock C Inner Join Inventory I on C.cinvcode=I.cinvcode\r\n  left join AA_BatchProperty AB on isnull(AB.cinvcode,N'')=isnull(C.cinvcode,N'') and isnull(AB.cbatch,N'')=isnull(C.cBatch,N'') \r\n\tand isnull(AB.cfree1,N'')=isnull(C.cfree1,N'') and isnull(AB.cfree2,N'')=isnull(C.cfree2,N'')   \r\n \tand isnull(AB.cfree3,N'')=isnull(C.cfree3,N'') and isnull(AB.cfree4,N'')=isnull(C.cfree4,N'') \r\n\tand isnull(AB.cfree5,N'')=isnull(C.cfree5,N'') and isnull(AB.cfree6,N'')=isnull(C.cfree6,N'') \r\n\tand isnull(AB.cfree7,N'')=isnull(C.cfree7,N'') and isnull(AB.cfree8,N'')=isnull(C.cfree8,N'') \r\n\tand isnull(AB.cfree9,N'')=isnull(C.cfree9,N'') and isnull(AB.cfree10,N'')=isnull(C.cfree10,N'')  \r\n group by C.cWhCode,C.cInvCode,C.cFree1,C.cFree2,C.cFree3,C.cFree4,C.cFree5,C.cFree6,C.cFree7,C.cFree8,C.cFree9,C.cFree10,\r\n\tC.cBatch,C.bStopFlag,C.BGSPSTOP,C.dLastCheckDate,C.cCheckState,C.dLastYearCheckDate,C.cvmivencode,--C.dMdate,C.iMassDate,C.cMassUnit,\r\n\tC.dVDate,C.cexpirationdate,\r\n       (case when isnull(I.cSRPolicy,'')='LP' and isnull(i.bspecialorder,0)=1 then C.iSoType else 0 end) ,  \r\n       (case when isnull(I.cSRPolicy,'')='LP' and isnull(i.bspecialorder,0)=1 then C.iSodid else '' end),\r\n        AB.cbatchproperty1,AB.cbatchproperty2,AB.cbatchproperty3,AB.cbatchproperty4,AB.cbatchproperty5,\r\n        AB.cbatchproperty6,AB.cbatchproperty7,AB.cbatchproperty8,AB.cbatchproperty9,AB.cbatchproperty10","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_CurrentStock_PE_SUM"},{"field":"Type","value":"View"}],"columns":[{"id":"column-319602","object_id":"column-319602","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319603","object_id":"column-319603","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319604","object_id":"column-319604","name":"cFree1","name_without_path":"cFree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319605","object_id":"column-319605","name":"cFree2","name_without_path":"cFree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319606","object_id":"column-319606","name":"cFree3","name_without_path":"cFree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319607","object_id":"column-319607","name":"cFree4","name_without_path":"cFree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319608","object_id":"column-319608","name":"cFree5","name_without_path":"cFree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319609","object_id":"column-319609","name":"cFree6","name_without_path":"cFree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319610","object_id":"column-319610","name":"cFree7","name_without_path":"cFree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319611","object_id":"column-319611","name":"cFree8","name_without_path":"cFree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319612","object_id":"column-319612","name":"cFree9","name_without_path":"cFree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319613","object_id":"column-319613","name":"cFree10","name_without_path":"cFree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319614","object_id":"column-319614","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319615","object_id":"column-319615","name":"bStopFlag","name_without_path":"bStopFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319616","object_id":"column-319616","name":"BGSPSTOP","name_without_path":"BGSPSTOP","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319617","object_id":"column-319617","name":"dLastCheckDate","name_without_path":"dLastCheckDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319618","object_id":"column-319618","name":"cCheckState","name_without_path":"cCheckState","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319619","object_id":"column-319619","name":"dLastYearCheckDate","name_without_path":"dLastYearCheckDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319620","object_id":"column-319620","name":"cvmivencode","name_without_path":"cvmivencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319621","object_id":"column-319621","name":"cMassUnit","name_without_path":"cMassUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319622","object_id":"column-319622","name":"iMassDate","name_without_path":"iMassDate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319623","object_id":"column-319623","name":"dVDate","name_without_path":"dVDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319624","object_id":"column-319624","name":"dMdate","name_without_path":"dMdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319625","object_id":"column-319625","name":"cexpirationdate","name_without_path":"cexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319626","object_id":"column-319626","name":"dexpirationdate","name_without_path":"dexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319627","object_id":"column-319627","name":"iexpiratdatecalcu","name_without_path":"iexpiratdatecalcu","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319628","object_id":"column-319628","name":"iSoType","name_without_path":"iSoType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319629","object_id":"column-319629","name":"iSodid","name_without_path":"iSodid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319630","object_id":"column-319630","name":"iQuantity","name_without_path":"iQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319631","object_id":"column-319631","name":"iNum","name_without_path":"iNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319632","object_id":"column-319632","name":"fOutQuantity","name_without_path":"fOutQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319633","object_id":"column-319633","name":"fOutNum","name_without_path":"fOutNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319634","object_id":"column-319634","name":"fInQuantity","name_without_path":"fInQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319635","object_id":"column-319635","name":"fInNum","name_without_path":"fInNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319636","object_id":"column-319636","name":"fTransInQuantity","name_without_path":"fTransInQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319637","object_id":"column-319637","name":"fTransInNum","name_without_path":"fTransInNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319638","object_id":"column-319638","name":"fTransOutQuantity","name_without_path":"fTransOutQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319639","object_id":"column-319639","name":"fTransOutNum","name_without_path":"fTransOutNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319640","object_id":"column-319640","name":"fPlanQuantity","name_without_path":"fPlanQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319641","object_id":"column-319641","name":"fPlanNum","name_without_path":"fPlanNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319642","object_id":"column-319642","name":"fDisableQuantity","name_without_path":"fDisableQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319643","object_id":"column-319643","name":"fDisableNum","name_without_path":"fDisableNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319644","object_id":"column-319644","name":"fAvaQuantity","name_without_path":"fAvaQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319645","object_id":"column-319645","name":"fAvaNum","name_without_path":"fAvaNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319646","object_id":"column-319646","name":"fStopQuantity","name_without_path":"fStopQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319647","object_id":"column-319647","name":"fStopNum","name_without_path":"fStopNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319648","object_id":"column-319648","name":"cbatchproperty1","name_without_path":"cbatchproperty1","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319649","object_id":"column-319649","name":"cbatchproperty2","name_without_path":"cbatchproperty2","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319650","object_id":"column-319650","name":"cbatchproperty3","name_without_path":"cbatchproperty3","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319651","object_id":"column-319651","name":"cbatchproperty4","name_without_path":"cbatchproperty4","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319652","object_id":"column-319652","name":"cbatchproperty5","name_without_path":"cbatchproperty5","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319653","object_id":"column-319653","name":"cbatchproperty6","name_without_path":"cbatchproperty6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319654","object_id":"column-319654","name":"cbatchproperty7","name_without_path":"cbatchproperty7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319655","object_id":"column-319655","name":"cbatchproperty8","name_without_path":"cbatchproperty8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319656","object_id":"column-319656","name":"cbatchproperty9","name_without_path":"cbatchproperty9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319657","object_id":"column-319657","name":"cbatchproperty10","name_without_path":"cbatchproperty10","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};