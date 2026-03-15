import SwiftUI
struct FormView: View {
    @Binding var a: String
    @Binding var b: String
    var body: some View {
        VStack {
            TextField("A", text: $a)
            TextField("B", text: $b)
        }.padding()
    }
}
struct ContentView: View {
    @State private var a = ""
    @State private var b = ""
    var body: some View { FormView(a: $a, b: $b) }
}
