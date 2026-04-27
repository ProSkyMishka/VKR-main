import SwiftUI

struct ABbp003: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bp003-Aplus") { a += 1 }
            Button("bp003-Bplus") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("bp003-A=\(a) B=\(b)")
            ABbp003(a: $a, b: $b)
        }
        .padding()
    }
}
