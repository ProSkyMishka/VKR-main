import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<15, id: \.self) { k in
                Text("fs011-row \(k)")
            }
        }
    }
}
