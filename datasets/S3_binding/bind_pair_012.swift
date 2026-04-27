import SwiftUI

struct ABbp012: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bp012-Aplus") { a += 1 }
            Button("bp012-Bplus") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("bp012-A=\(a) B=\(b)")
            ABbp012(a: $a, b: $b)
        }
        .padding()
    }
}
