import SwiftUI

struct Childbi002: View {
    @Binding var n: Int
    var body: some View {
        Button("bi002-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi002-total: \(n)")
            Childbi002(n: $n)
        }
        .padding()
    }
}
