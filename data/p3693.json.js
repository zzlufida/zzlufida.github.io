window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p3693","name":"SR_PROC_SaveServicBill","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SR_PROC_SaveServicBill"},{"field":"Type","value":"Procedure"}],"script":null,"parameters":[{"name":"Return","description":null,"mode":"INOUT","data_type":"nvarchar(5)","custom_fields":{}},{"name":"sType","description":null,"mode":"IN","data_type":"nvarchar(10)","custom_fields":{}},{"name":"OID","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"VT_ID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"cSerBillCode","description":null,"mode":"IN","data_type":"nvarchar(60)","custom_fields":{}},{"name":"SerTypeID","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"SerRequestID","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"cCusCode","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cItemCode","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cItemName","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"iVTSet_ID","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cReqPersonCode","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cReqDepCode","description":null,"mode":"IN","data_type":"nvarchar(24)","custom_fields":{}},{"name":"ContactID","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"SerStateID","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"cInvCode","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"SerialNoID","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"fQuantity","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"SerModeID","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"dReqDate","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"dReqTime","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cReqContent","description":null,"mode":"IN","data_type":"nvarchar(1000)","custom_fields":{}},{"name":"cSerPrincipalCode","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cSerDepCode","description":null,"mode":"IN","data_type":"nvarchar(24)","custom_fields":{}},{"name":"dIntendDate","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"dIntendTime","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"dArriveDate","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"dArriveTime","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"dCompletedDate","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"dCompletedTime","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cExplain","description":null,"mode":"IN","data_type":"nvarchar(400)","custom_fields":{}},{"name":"cCusAdvice","description":null,"mode":"IN","data_type":"nvarchar(400)","custom_fields":{}},{"name":"cExchName","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"fExchRate","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mChargeSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatChargeSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"fDiscount","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mDiscountSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatDiscountSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mGatheringSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatGatheringSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"PreClosedStateID","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"cDefine1","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cDefine2","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cDefine3","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cDefine4","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cDefine5","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"cDefine6","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cDefine7","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"cDefine8","description":null,"mode":"IN","data_type":"nvarchar(8)","custom_fields":{}},{"name":"cDefine9","description":null,"mode":"IN","data_type":"nvarchar(16)","custom_fields":{}},{"name":"cDefine10","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cDefine11","description":null,"mode":"IN","data_type":"nvarchar(240)","custom_fields":{}},{"name":"cDefine12","description":null,"mode":"IN","data_type":"nvarchar(240)","custom_fields":{}},{"name":"cDefine13","description":null,"mode":"IN","data_type":"nvarchar(240)","custom_fields":{}},{"name":"cDefine14","description":null,"mode":"IN","data_type":"nvarchar(240)","custom_fields":{}},{"name":"cDefine15","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"cDefine16","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"dCreatedDate","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cCreator","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cModifier","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"dModifiedDate","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cAgrCode","description":null,"mode":"IN","data_type":"nvarchar(60)","custom_fields":{}},{"name":"mFreeSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatFreeSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mCompensateSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatCompensateSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"dnVerifytime","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"dVerifydate","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cVerifier","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"iverifystateex","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"ireturncount","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"IsWfControlled","description":null,"mode":"IN","data_type":"bit","custom_fields":{}},{"name":"cModType","description":null,"mode":"IN","data_type":"nvarchar(4)","custom_fields":{}},{"name":"cSysBarCode","description":null,"mode":"IN","data_type":"nvarchar(60)","custom_fields":{}},{"name":"ReturnError","description":null,"mode":"INOUT","data_type":"nvarchar(5)","custom_fields":{}}],"dependencies":null,"imported_at":"2024-07-15 13:47"};