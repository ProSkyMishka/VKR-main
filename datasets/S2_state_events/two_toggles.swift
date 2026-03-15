import SwiftUI
struct ContentView: View {
    @State private var a = false
    @State private var b = false
    var body: some View {
        VStack {
            Toggle("A", isOn: $a)
            Toggle("B", isOn: $b)
        }.padding()
    }
}
