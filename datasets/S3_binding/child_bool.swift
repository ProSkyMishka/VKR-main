import SwiftUI
struct CheckView: View {
    @Binding var checked: Bool
    var body: some View {
        Toggle("Check", isOn: $checked)
    }
}
struct ContentView: View {
    @State private var checked = false
    var body: some View {
        CheckView(checked: $checked)
    }
}
