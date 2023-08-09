import { FeatureFlags } from '@/shared/types/featureFlags'

let featureFlags: FeatureFlags

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
	if (newFeatureFlags) {
		featureFlags = newFeatureFlags
	}
}

export function getFeatureFlag(flag) {
	if (typeof featureFlags === 'object' && flag in featureFlags) {
		return featureFlags[flag]
	}
	return false
}