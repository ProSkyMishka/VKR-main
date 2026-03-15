import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 20) {
            HStack {
                Text("A")
                Text("B")
            }
            HStack {
                Text("C")
                Text("D")
            }
        }
        .padding(.horizontal, 40)
        .padding(.vertical, 20)
    }
}
