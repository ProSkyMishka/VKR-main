import SwiftUI

struct ABbp002: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bp002-Aplus") { a += 1 }
            Button("bp002-Bplus") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("bp002-A=\(a) B=\(b)")
            ABbp002(a: $a, b: $b)
        }
        .padding()
    }
}
