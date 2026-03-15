import SwiftUI
struct CheckboxView: View {
    @Binding var isChecked: Bool
    var body: some View {
        Toggle("Item", isOn: $isChecked)
    }
}
struct ContentView: View {
    @State private var isChecked = false
    var body: some View {
        CheckboxView(isChecked: $isChecked).padding()
    }
}
