import SwiftUI

struct Childbi010: View {
    @Binding var n: Int
    var body: some View {
        Button("bi010-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi010-total: \(n)")
            Childbi010(n: $n)
        }
        .padding()
    }
}
