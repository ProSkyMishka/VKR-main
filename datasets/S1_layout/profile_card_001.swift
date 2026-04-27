import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc001-name")
                    .font(.title2)
                    .bold()
                Text("pc001-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc001-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc001-posts"); Text("\(11)").bold() }
                VStack { Text("pc001-followers"); Text("\(101)").bold() }
                VStack { Text("pc001-likes"); Text("\(1001)").bold() }
            }
        }
        .padding()
    }
}
